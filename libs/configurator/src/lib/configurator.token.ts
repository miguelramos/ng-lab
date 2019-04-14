import { InjectionToken } from '@angular/core';
import { ConfigOptions } from './configurator.typings';

export const OPTIONS_TOKEN = new InjectionToken<ConfigOptions>(
  '[CONFIG] Json config'
);

export const CONFIG_DEFAULT_OPTIONS: ConfigOptions = {
  DEFAULT_LANG: 'pt',
  ENDPOINTS: {
    LOCAL: null
  }
};
