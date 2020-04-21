/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { InjectionToken } from '@angular/core';
import { TrackingOptions } from './journey.typings';

export const JOURNEY_TOKEN = new InjectionToken<boolean | TrackingOptions>(
  '[JOURNEY] Journey initializer.'
);

export const JOURNEY_DEFAULT_OPTIONS: TrackingOptions = {
  interaction: true
};
