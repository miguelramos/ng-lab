/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
export type fn = (params: any) => any;

export interface HubServiceActionInterface {
  event: string;
  data: any;
  callback: fn;
  action: 'emit' | 'on' | 'off';
}
