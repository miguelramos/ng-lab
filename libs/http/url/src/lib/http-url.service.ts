/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { Injectable, Inject } from '@angular/core';

import { ConfiguratorService } from '@ng-lab/configurator';
import { DomainHostType, RouteDescriptorType } from './http-url.typing';

@Injectable()
export class HttpUrlService {
  prefixes: DomainHostType[] = [];
  routes: Map<string, RouteDescriptorType> = new Map();

  constructor(@Inject(ConfiguratorService) private configurator: ConfiguratorService) {
    this.routes = new Map();
    //this.init();
  }
}
