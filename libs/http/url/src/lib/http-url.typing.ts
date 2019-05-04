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
