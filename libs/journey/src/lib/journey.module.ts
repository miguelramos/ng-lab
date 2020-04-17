/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { NgModule, Inject, Injector, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneyService } from './journey.service';
import { JOURNEY_TOKEN, JOURNEY_DEFAULT_OPTIONS } from './journey.token';
import { TrackingOptions } from './journey.typings';
import { ConfiguratorService } from '@ng-lab/configurator';
import { TrackingStart } from './tracker';

export function journeyFactory() {
  return new JourneyService();
}

@NgModule({
  imports: [CommonModule]
})
export class JourneyModule {

  static forRoot(settings: boolean|TrackingOptions = JOURNEY_DEFAULT_OPTIONS): ModuleWithProviders {
    return {
      ngModule: JourneyModule,
      providers: [
        { provide: JOURNEY_TOKEN, useValue: settings },
        { provide: JourneyService, useFactory: journeyFactory, deps: [] }
        // Provide this in your app as angular note refers: https://angular.io/api/common/http/HttpInterceptor#usage-notes
        //{ provide: HTTP_INTERCEPTORS, useClass: TrackingHttpRequest, multi: true }
      ]
    };
  }

  constructor(
    @Inject(Injector) injector: Injector,
    @Optional() @SkipSelf() parentModule: JourneyModule
  ) {
    if (parentModule) {
      throw new Error('JourneyModule is already loaded. Import it in the AppModule only');
    }

    const journey = injector.get(JourneyService, false);
    const trackOptions = injector.get(JOURNEY_TOKEN, false);
    const configurator = injector.get(ConfiguratorService, false);

    if (journey && trackOptions) {
      journey.init(configurator);

      TrackingStart(trackOptions);
    }
  }
}
