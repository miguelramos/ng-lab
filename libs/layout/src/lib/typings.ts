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
