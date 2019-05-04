/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { Injectable, Inject } from '@angular/core';

import { isEmpty, head, find, has } from 'lodash';

import { flatten, GenericType } from '@ng-lab/support';
import { ConfiguratorService } from '@ng-lab/configurator';
import { DomainHostType, RouteDescriptorType, RouteResolverType } from './http-url.typing';
import { HttpUrlResolverValidationError, HttpUrlResolverTestError, HttpUrlEmptyError } from './http-url.errors';

/**
 * @description
 * Service to register urls simple and with parameters
 *
 * @ngModule HttpUrlModule
 * @publicApi
 */
@Injectable()
export class HttpUrlService {
  /**
   * @description
   * Property key to find routes in `ConfiguratorService`
   *
   * @memberof HttpUrlService
   */
  static OPTION_ENDPOINT_NAME = 'ENDPOINTS';
  /**
   * @description
   * Property key to find domains in `ConfiguratorService`
   *
   * @memberof HttpUrlService
   */
  static OPTIONS_DOMAIN_NAME = 'DOMAINS_API';

  /**
   * @description
   * Collection of domains to prefix urls
   *
   * @memberof HttpUrlService
   */
  protected prefixes: DomainHostType[] = [];

  /**
   * @description
   * Collection of routes registered
   *
   * @memberof HttpUrlService
   */
  protected routes: Map<string, RouteDescriptorType> = new Map();

  /**
   * @description
   * Creates an instance of HttpUrlService.
   *
   * @param configurator ConfiguratorService instance
   * @memberof HttpUrlService
   */
  constructor(@Inject(ConfiguratorService) private configurator: ConfiguratorService) {
    this.init();
  }

  /**
   * @description
   * Init setup for resolving routes collection.
   */
  private init(): void {
    const { keys } = Object;

    const endpoints = this.configurator.getOptionTree<GenericType>(
      HttpUrlService.OPTION_ENDPOINT_NAME,
      false
    );

    this.prefixes = this.configurator.getOptionTree<DomainHostType[]>(
      HttpUrlService.OPTIONS_DOMAIN_NAME,
      false
    );

    if (isEmpty(endpoints)) {
      throw new HttpUrlEmptyError('Empty Config', 'ConfiguratorService has no ENDPOINTS and DOMAINS_API entries');
    }

    const flatEndpoints = flatten(endpoints);

    keys(flatEndpoints).forEach(key =>
      this.setupRoute(key, flatEndpoints[key])
    );
  }

  /**
   * @description
   * Setup regex routing and add it to Map.
   *
   * @param name Route name
   * @para uri Url path
   */
  protected setupRoute(name: string, uri: string): void {
    const verbal = new RegExp(/^@\w+\:/);
    const search = head(verbal.exec(uri)) || '';

    const urlDescriptor = {
      name: name,
      prefix: search,
      uri: uri,
      endpoint: uri.replace(search, '')
    } as RouteDescriptorType;

    this.addRoute(name, urlDescriptor);
  }

  /**
   * @description
   * Add route to Map.
   *
   * @param name Route name/key
   * @param descriptor Route object properties
   */
  public addRoute(name: string, descriptor: RouteDescriptorType) {
    this.routes.set(name, descriptor);
  }

  /**
   * @description
   * Get the route from Map and resolve domain host. Pass parameters
   * to complete dynamic arguments on route, even overriding domain host is possible.
   *
   * @param name Route name/key
   * @param params Route parameters
   * @param domain Route mai domain
   */
  public get(name: string, params: GenericType = null, domain: string = null): string {
    /*if (name.includes('.')) {
      name = name.substr(name.indexOf('.') + 1);
    }*/

    const routeDescriptor: RouteDescriptorType = this.routes.get(name);

    if (isEmpty(routeDescriptor)) {
      throw new HttpUrlResolverValidationError(
        name,
        'Uri is not setup on mappings.'
      );
    } else {
      const resolved = this.resolve(routeDescriptor, params, domain);

      return resolved.url;
    }
  }

  /**
   * @description
   * Check if route exist in the collection
   *
   * @param name Route name/key
   * @memberof HttpUrlService
   */
  public hasRoute(name: string): boolean {
    return this.routes.has(name);
  }

  /**
   * @description
   * Resolve host domain and route.
   *
   * @param descriptor Route object properties
   * @param args Route arguments
   * @param host Route host domain
   */
  protected resolve(descriptor: RouteDescriptorType, args: GenericType, host = ''): RouteResolverType {
    const regex = this.expression(descriptor.endpoint);
    const test = regex.test(descriptor.endpoint);
    const prefix = descriptor.prefix.substring(0, descriptor.prefix.length - 1);

    if (test) {
      let url = null;
      const parameters = [];

      regex
        .exec(descriptor.endpoint)
        .slice(1)
        .forEach(arg => {
          if (arg) {
            parameters.push(decodeURIComponent(arg));
          }

          if (args && arg) {
            url = url
              ? url.replace(arg, args[arg.substring(1, arg.length)])
              : descriptor.endpoint.replace(
                  arg,
                  args[arg.substring(1, arg.length)]
                );
          }
        });

      const domain = find<DomainHostType>(this.prefixes, ['KEY', prefix]);
      const domainHost = isEmpty(host) ? domain.HOST || '' : host;
      const domainOrigin = domain.ORIGIN ? window.location.origin : '';

      return <RouteResolverType>{
        name: descriptor.name,
        host: domainHost,
        url: url
          ? `${domainOrigin}${domainHost}${url}`
          : `${domainOrigin}${domainHost}${descriptor.endpoint}`,
        params: args,
        regex: regex.source
      };
    } else {
      throw new HttpUrlResolverTestError(
        descriptor.name,
        'UrlResolver test didn\'t match any url.'
      );
    }
  }

  /**
   * @description
   * Macth route arguments.
   *
   * @param route Route path
   */
  protected expression(route: string): RegExp {
    const splatParam = /\*\w+/g;
    const namedParam = /(\(\?)?:\w+/g;
    const optionalParam = /\((.*?)\)/g;
    const escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;

    route = route
      .replace(escapeRegExp, '\\$&')
      .replace(optionalParam, '(?:$1)?')
      .replace(namedParam, (match, optional) => {
        return optional ? match : '([^/?]+)';
      })
      .replace(splatParam, '([^?]*?)');

    return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
  }

}
