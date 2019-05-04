/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */

import { Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs';

import { HubModule } from './hub.module';
import { HubServiceActionInterface, fn } from './hub.typing';

/**
 * @description
 * HubService is a pure publication/subscriber event.
 *
 * @ngModule HubModule
 * @publicApi
 */
@Injectable({
  providedIn: HubModule
})
export class HubService {
  /**
   * @description
   * Map collection of events
   */
  private readonly provision: Map<string, [] | [fn]> = new Map();

  /**
   * @description
   * Observer of events
   *
   * @memberof HubService
   */
  public observe = new ReplaySubject<HubServiceActionInterface>();

  /**
   * @description
   * Emits and event on the hub
   *
   * @param event Event name
   * @param data Dato of the event
   * @memberof HubService
   */
  public emit(event: string, data: any) {
    const provision = this.provision.get(event) as [fn];

    provision.forEach(item => {
      item(data);
      this.observe.next({
        event: event,
        data: data,
        callback: item,
        action: 'emit'
      });
    });
  }

  /**
   * @description
   * Listener when event is trigger
   *
   * @param event Event name
   * @param cb Callback to execute
   * @memberof HubService
   */
  public on(event: string, cb: fn) {
    if (!this.provision.has(event)) {
      this.initMap(event);
    }

    const provision = this.provision.get(event) as [fn];
    provision.push(cb);

    this.provision.set(event, provision);
    this.observe.next({ event: event, callback: cb, data: null, action: 'on' });
  }

  /**
   * @description
   * Deactivate listeners on event
   *
   * @param event Event name
   * @param cb Callback executed
   * @memberof HubService
   */
  public off(event: string, cb: fn) {
    const provision = this.provision.get(event) as [fn];

    const handlerIdx = provision.findIndex(handler => handler === cb);

    if (handlerIdx > -1) {
      provision.splice(handlerIdx, 1);
      this.provision.set(event, provision);
    }

    this.observe.next({
      event: event,
      callback: cb,
      data: null,
      action: 'off'
    });
  }

  /**
   * @description
   * Clear all registered events
   */
  public clear(): void {
    this.provision.clear();
  }

  /**
   * @description
   * Verify if event exist
   *
   * @param event Event name
   * @memberof HubService
   */
  public hasEvent(event: string): boolean {
    return this.provision.has(event);
  }

  /**
   * @description
   * Size of map events
   *
   * @memberof HubService
   */
  public size(): number {
    return this.provision.size;
  }

  /**
   * @description
   * Get events callbak
   *
   * @param event Event name
   * @memberof HubService
   */
  public getEventFunctions(event: string): [fn] {
    return this.provision.get(event) as [fn];
  }

  /**
   * @description
   * Init map events collection
   *
   * @param event Event name
   * @memberof HubService
   */
  protected initMap(event: string): void {
    this.provision.set(event, []);
  }
}
