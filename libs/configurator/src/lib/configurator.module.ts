/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
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
