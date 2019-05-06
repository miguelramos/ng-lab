/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { Injectable, Optional, Inject, SkipSelf } from '@angular/core';

import { Subject } from 'rxjs';
import { isObject, mapKeys, set, startsWith, get, merge, has } from 'lodash';

import { ConfigOptions } from './configurator.typings';
import { OPTIONS_TOKEN, CONFIG_DEFAULT_OPTIONS } from './configurator.token';

/**
 * @description
 * Service to manage options/configs for services and apps.
 *
 * @ngModule ConfiguratorModule
 * @publicApi
 */
@Injectable({
  providedIn: 'root'
})
export class ConfiguratorService {

  /**
   * @description
   * Property for listen subject dispatches
   *
   * @memberof ConfiguratorService
   */
  public readonly listener = new Subject<ConfigOptions>();

  /**
   * @description
   * Property to register options as a collection
   *
   * @memberof ConfiguratorService
   */
  private repository: ConfigOptions = <ConfigOptions>{};

  constructor(
    @Optional()
    @SkipSelf()
    @Inject(OPTIONS_TOKEN)
    options?: ConfigOptions | undefined
  ) {
    this.options = merge(CONFIG_DEFAULT_OPTIONS, options);
  }

  /**
   * @description
   * Sets a new option/value in collection
   *
   * @param name Option key
   * @param value Option value
   * @memberof ConfiguratorService
   */
  public setOption(name: string, value: any): void {
    this.repository[name] = value;
    this.listener.next({ options: this.repository });
  }

  /**
   * @description
   * Get a configuration value from the collection.
   *
   * @param name Option key
   * @param defaults Default value if missing
   */
  public getOption<O>(name: string, defaults: any = null): O {
    return this.hasOption(name) ? this.repository[name] : defaults;
  }

  /**
   * @description
   * Gets a tree object of options
   *
   * @param rootKey Includ root key
   * @param fromRoot From top object
   * @memberof ConfiguratorService
   */
  public getOptionTree<T>(rootKey: string, fromRoot: boolean = true): T {
    const tree = {};

    mapKeys(this.options, (value: any, key: string) => {
      if (startsWith(key, rootKey)) {
        set(tree, key, value);
      }

      return key;
    });

    return fromRoot ? tree : get(tree, rootKey);
  }

  /**
   * @description
   * Getter Options collection
   *
   * @memberof ConfiguratorService
   */
  get options(): ConfigOptions {
    return this.repository;
  }

  /**
   * @description
   * Setter Options collection
   *
   * @memberof ConfiguratorService
   */
  set options(opt: ConfigOptions) {
    this.flat(opt);
  }

  /**
   * @description
   * Resets options
   */
  public reset(): void {
    this.options = {};
    this.repository = {};
  }

  /**
   * @description
   * Verify if option name exists on the collection.
   *
   * @param name Option key
   */
  public hasOption(name: string): boolean {
    return has(this.repository, name);
  }

  /**
   * @description
   * Converts a tree object keys in flat
   * key string in one level.
   *
   * @usageNotes
   * ```javascript
   * {
   *  name: '',
   *  profile: {
   *    email: ''
   *  }
   * }
   * ```
   * to:
   * ```javascript
   * {'name': '', 'profile.email': ''}
   * ```
   * @param config
   * @param key Key to append
   */
  private flat(config: any, key: string = ''): void {
    const path: string = +(key === '') ? key : key + '.';

    Object.keys(config).forEach((keyId: string) => {
      if (isObject(config[keyId])) {
        this.flat(config[keyId], path + keyId);
      } else {
        this.setOption(`${path + keyId}`, config[keyId]);
      }
    });
  }
}
