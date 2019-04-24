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

@Injectable({
  providedIn: 'root'
})
export class ConfiguratorService {
  listener = new Subject<ConfigOptions>();

  private repository: ConfigOptions = <ConfigOptions>{};

  constructor(
    @Optional()
    @SkipSelf()
    @Inject(OPTIONS_TOKEN)
    options?: ConfigOptions | undefined
  ) {
    this.options = merge(CONFIG_DEFAULT_OPTIONS, options);
  }

  public setOption(name: string, value: any): void {
    this.repository[name] = value;
    this.listener.next({ options: this.repository });
  }

  /**
   * Get a configuration value from the collection.
   *
   */
  public getOption<O>(name: string, defaults: any = null): O {
    return this.hasOption(name) ? this.repository[name] : defaults;
  }

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

  get options(): ConfigOptions {
    return this.repository;
  }

  set options(opt: ConfigOptions) {
    this.flat(opt);
  }

  public reset(): void {
    this.options = {};
    this.repository = {};
  }

  /**
   * Verify if option name exists on the collection.
   *
   */
  public hasOption(name: string): boolean {
    return has(this.repository, name);
  }

  /**
   * Converts a tree object keys in flat
   * key string in one level.
   *
   * {
   *  name: '',
   *  profile: {
   *    email: ''
   *  }
   * }
   *
   * to: {'name': '', 'profile.email': ''}
   *
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
