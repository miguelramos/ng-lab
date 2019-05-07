export interface Breakpoints {
  XS: number;
  SM: number;
  MD: number;
  LG: number;
  XL: number;
}

export interface ResponsiveChangeInterface {
  width: number;
  key: keyof Breakpoints;
}
