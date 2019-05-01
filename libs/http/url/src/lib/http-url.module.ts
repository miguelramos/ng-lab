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
