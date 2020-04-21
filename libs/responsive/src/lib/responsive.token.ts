/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { InjectionToken } from '@angular/core';
import { Breakpoints } from './responsive.typing';

export const DEFAULT_RESPONSIVE_BREAKPOINTS_TOKEN: Breakpoints = {
  XS: 575,
  SM: 767,
  MD: 991,
  LG: 1199,
  XL: 1200
};

export const RESPONSIVE_BREAKPOINTS_TOKEN = new InjectionToken<Breakpoints>(
  '[RESPONSIVE] Breakpoints definitions.'
);
