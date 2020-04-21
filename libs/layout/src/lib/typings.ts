/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
export enum EDGES {
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  ALL = 'ALL'
}

export type EdgeSide = EDGES;

export interface LayoutResizeSettings {
  gutter: number;
  edge: EdgeSide;
  color: string;
}

export interface LayoutExpandSettings {
  collapseSize: number;
  collapseWhenClickOutside: boolean;
}
