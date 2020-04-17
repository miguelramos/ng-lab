/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpUrlService } from './http-url.service';
import { ConfiguratorService, ConfiguratorModule } from '@ng-lab/configurator';

@NgModule({
  imports: [CommonModule, ConfiguratorModule],
  providers: [
    {
      provide: HttpUrlService,
      useClass: HttpUrlService,
      deps: [ConfiguratorService]
    }
  ]
})
export class HttpUrlModule {}
