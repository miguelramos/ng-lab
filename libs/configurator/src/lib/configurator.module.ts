import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { OPTIONS_TOKEN } from './configurator.token';
import { ConfigOptions } from './configurator.typings';
import { ConfiguratorService } from './configurator.service';

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
          provide: ConfiguratorService,
          useClass: ConfiguratorService,
          deps: [OPTIONS_TOKEN]
        }
      ]
    };
  }
}
