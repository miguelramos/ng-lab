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
