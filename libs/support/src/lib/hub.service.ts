/**
* @license
* Copyright NgLab All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://www.ng-lab.com/license
*/

import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs';

import { SupportModule } from './support.module';

type fn = (params: any) => any;

export interface HubServiceActionInterface {
  event: string;
  data: any;
  callback: fn;
  action: 'emit' | 'on' | 'off';
}

@Injectable({
  providedIn: SupportModule
})
export class HubService {
  private readonly provision: Map<string, []|[fn]> = new Map();

  public observe = new ReplaySubject<HubServiceActionInterface>();

  public emit(event: string, data: any) {
    const provision = this.provision.get(event) as [fn];

    provision.forEach(item => {
      item(data);
      this.observe.next({ event: event, data: data, callback: item, action: 'emit' });
    });
  }

  public on(event: string, cb: fn) {
    if (!this.provision.has(event)) {
      this.initMap(event);
    }

    const provision = this.provision.get(event) as [fn];
    provision.push(cb);

    this.provision.set(event, provision);
    this.observe.next({ event: event, callback: cb, data: null, action: 'on' });
  }

  public off(event: string, cb: fn) {
    const provision = this.provision.get(event) as [fn];

    const handlerIdx = provision.findIndex(handler => handler === cb);

    if (handlerIdx > -1) {
      provision.splice(handlerIdx, 1);
      this.provision.set(event, provision);
    }

    this.observe.next({ event: event, callback: cb, data: null, action: 'off' });
  }

  public clear() {
    this.provision.clear();
  }

  public hasEvent(event: string) {
    return this.provision.has(event);
  }

  public size() {
    return this.provision.size;
  }

  public getEventFunctions(event: string): [fn] {
    return this.provision.get(event) as [fn];
  }

  protected initMap(event: string) {
    this.provision.set(event, []);
  }
}
