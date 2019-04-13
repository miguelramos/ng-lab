import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { OPTIONS_TOKEN } from './configurator.token';
import { Configurator } from './configurator.service';
import { ConfigOptions } from './configurator.typings';

@NgModule({
  imports: [CommonModule]
})
export class ConfiguratorModule {
  static forRoot(config: ConfigOptions): ModuleWithProviders {
    return {
      ngModule: ConfiguratorModule,
      providers: [
        {
          provide: OPTIONS_TOKEN,
          useValue: config
        },
        {
          provide: Configurator,
          useClass: Configurator,
          deps: [OPTIONS_TOKEN]
        }
      ]
    };
  }
}
