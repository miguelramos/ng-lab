import { InjectionToken } from '@angular/core';

import { ScriptInterface } from './http-script.typing';

export const SCRIPTS_LOADER = new InjectionToken<ScriptInterface>(
  '[SCRIPTS] Scripts loader token',
  {
    providedIn: 'root',
    factory: () => [] as any
  }
);
