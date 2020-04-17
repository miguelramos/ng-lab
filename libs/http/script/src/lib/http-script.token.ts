/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { InjectionToken } from '@angular/core';

import { ScriptInterface } from './http-script.typing';

export const SCRIPTS_LOADER = new InjectionToken<ScriptInterface>(
  '[SCRIPTS] Scripts loader token',
  {
    providedIn: 'root',
    factory: () => [] as any
  }
);
