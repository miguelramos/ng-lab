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
import { DomainHostType, RouteDescriptorType } from './url.typing';
import { UrlResolverValidationError, UrlResolverTestError, UrlEmptyError } from './url.errors';

@Injectable()
export class UrlService {
  static OPTION_ENDPOINT_NAME = 'ENDPOINTS';
  static OPTIONS_DOMAIN_NAME = 'DOMAINS_API';

  protected prefixes: DomainHostType[] = [];
  protected routes: Map<string, RouteDescriptorType> = new Map();

  constructor(@Inject(ConfiguratorService) private configurator: ConfiguratorService) {
    this.init();
  }

  /**
   * Init setup for resolving routes collection.
   */
  private init(): void {
    const { keys } = Object;

    const endpoints = this.configurator.getOptionTree<GenericType>(
      UrlService.OPTION_ENDPOINT_NAME,
      false
    );

    this.prefixes = this.configurator.getOptionTree<DomainHostType[]>(
      UrlService.OPTIONS_DOMAIN_NAME,
      false
    );

    if (isEmpty(endpoints)) {
      throw new UrlEmptyError('Empty Config', 'ConfiguratorService has no ENDPOINTS and DOMAINS_API entries');
    }

    const flatEndpoints = flatten(endpoints);

    keys(flatEndpoints).forEach(key =>
      this.setupRoute(key, flatEndpoints[key])
    );
  }

  /**
   * Setup regex routing and add it to Map.
   */
  protected setupRoute(name: string, uri: string) {
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
   * Add route to Map.
   */
  public addRoute(name: string, descriptor: RouteDescriptorType) {
    this.routes.set(name, descriptor);
  }

  /**
   * Get the route from Map and resolve domain host. Pass parameters
   * to complete dynamic arguments on route, even overriding domain host is possible.
   */
  public get(name: string, params: GenericType = null, domain: string = null) {
    /*if (name.includes('.')) {
      name = name.substr(name.indexOf('.') + 1);
    }*/

    const routeDescriptor: RouteDescriptorType = this.routes.get(name);

    if (isEmpty(routeDescriptor)) {
      throw new UrlResolverValidationError(
        name,
        'Uri is not setup on mappings.'
      );
    } else {
      const resolved = this.resolve(routeDescriptor, params, domain);

      return resolved.url;
    }
  }

  public hasRoute(name: string) {
    return this.routes.has(name);
  }

  /**
   * Resolve host domain and route.
   */
  protected resolve(descriptor: RouteDescriptorType, args: GenericType, host = '') {
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

      return {
        name: descriptor.name,
        host: domainHost,
        url: url
          ? `${domainOrigin}${domainHost}${url}`
          : `${domainOrigin}${domainHost}${descriptor.endpoint}`,
        params: args,
        regex: regex.source
      };
    } else {
      throw new UrlResolverTestError(
        descriptor.name,
        'UrlResolver test didn\'t match any url.'
      );
    }
  }

  /**
   * Macth route arguments.
   */
  protected expression(route: string) {
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
