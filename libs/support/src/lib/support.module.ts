/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ErrorDetails {
  [key: string]: any;
}

export interface GenericType {
  [key: string]: any;
}

@NgModule({
  imports: [CommonModule]
})
export class SupportModule {}
