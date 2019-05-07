export type fn = (params: any) => any;

export interface HubServiceActionInterface {
  event: string;
  data: any;
  callback: fn;
  action: 'emit' | 'on' | 'off';
}
