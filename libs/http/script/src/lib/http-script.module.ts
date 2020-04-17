/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { NgModule } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';

import { SCRIPTS_LOADER } from './http-script.token';
import { HttpScriptLoaderService } from './http-script.service';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: SCRIPTS_LOADER,
      useValue: []
    },
    {
      provide: HttpScriptLoaderService,
      useClass: HttpScriptLoaderService,
      deps: [DOCUMENT, SCRIPTS_LOADER]
    }
  ]
})
export class HttpScriptModule {}
