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
