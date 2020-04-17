/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { InjectionToken } from '@angular/core';
import { ConfigOptions } from './configurator.typings';

export const OPTIONS_TOKEN = new InjectionToken<ConfigOptions>(
  '[CONFIG] Json config'
);

export const CONFIG_DEFAULT_OPTIONS: ConfigOptions = {
  DEFAULT_LANG: 'pt',
  ENDPOINTS: {
    LOCAL: ''
  }
};
