/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { HttpHeaders } from '@angular/common/http';

export interface TrackingOptions {
  network?: boolean;
  location?: boolean;
  performance?: boolean;
  scroll?: boolean;
  interaction?: boolean;
  typing?: boolean;
}

export interface JourneyMeta {
  startTime?: number;
  endTime?: number;
  startUrl?: string;
  screenWidth?: number;
  screenHeight?: number;
  userAgent?: string;
  geolocation?: Position;
  performance?: Performance;
}

export interface JourneyStep {
  time: number;
  type: JOURNEY_TYPE;
  data: any;
  location: string;
}

export type JOURNEY_TYPE =
  | 'URL_CHANGE'
  | 'SCROLL'
  | 'INTERACTION'
  | 'CLICK'
  | 'TYPING'
  | 'REQUEST'
  | 'NETWORK';

export enum JOURNEY_INTERACTION_TYPE {
  SCROLL = 'SCROLL',
  URL_CHANGE = 'URL_CHANGE',
  INTERACTION = 'INTERACTION',
  CLICK = 'CLICK',
  TYPING = 'TYPING',
  REQUEST = 'REQUEST',
  NETWORK = 'NETWORK',
  ACTION = 'ACTION'
}

export interface ErrorDetails {
  [key: string]: any;
}

export interface ErrorConfig {
  url: string | null;
  headers: HttpHeaders | null;
  live: boolean;
}

export type ErrorType =
  | 'FATAL'
  | 'INVALID'
  | 'NATIVE'
  | 'FAILURE'
  | 'VALIDATION'
  | 'REQUIRED'
  | 'UNKNOW';
