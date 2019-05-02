import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UrlService } from './url.service';
import { ConfiguratorService, ConfiguratorModule } from '@ng-lab/configurator';

@NgModule({
  imports: [CommonModule, ConfiguratorModule],
  providers: [
    {
      provide: UrlService,
      useClass: UrlService,
      deps: [ConfiguratorService]
    }
  ]
})
export class UrlModule {}
