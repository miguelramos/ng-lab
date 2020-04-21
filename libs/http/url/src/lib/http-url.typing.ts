/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { GenericType } from '@ng-lab/support';

export interface DomainHostType {
  HOST: string;
  KEY: string;
  ORIGIN?: boolean;
}

export interface RouteDescriptorType {
  name: string;
  prefix: string;
  uri: string;
  endpoint: string;
}

export interface RouteResolverType {
  name: string;
  host: string;
  url: string;
  params: GenericType;
  regex: string;
}
