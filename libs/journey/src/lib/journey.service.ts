/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { Injectable } from '@angular/core';
import { JourneyMeta, JourneyStep, JOURNEY_INTERACTION_TYPE } from './journey.typings';
import { ConfiguratorService } from '@ng-lab/configurator';
import { Subject } from 'rxjs';
import { merge } from 'lodash';

/**
 * @description
 * Service to track user actions
 *
 * @ngModule JourneyModule
 * @publicApi
 */
@Injectable()
export class JourneyService {
  /**
   * @description
   * Object that register once some info about user browser
   *
   * @memberof JourneyService
   */
  public meta: JourneyMeta = {
    endTime: 0,
    startTime: 0
  };

  /**
   * @description
   * Collect that logs track-step event
   *
   * @memberof JourneyService
   */
  public steps: JourneyStep[] = [];

  /**
   * @description
   * Listener to subscribe on events calls
   *
   * @memberof JourneyService
   */
  public listener = new Subject<CustomEvent|JourneyMeta>();

  /**
   * @description
   * Private observable
   *
   * @memberof JourneyService
   */
  private observe = new Subject<CustomEvent|JourneyMeta>();

  /**
   * @description
   * Init service listeners for track-meta and track-step. Use Configurator service
   * to limit collection logs to last n values. By default 20 are assigned.
   *
   * @param configurator ConfiguratorService instance
   * @memberof HttpUrlService
   */
  public init(configurator: ConfiguratorService): void {
    this.reset(configurator);
    this.metaEventListener();
    this.stepEventListener();
  }

  /**
   * @description
   * Register listener for track-meta event
   *
   * @memberof HttpUrlService
   */
  protected metaEventListener() {
    window.addEventListener('track-meta', (ev: CustomEvent | any) => {
      merge(this.meta, ev.detail);
      this.trigger(ev);
    });
  }

  /**
   * @description
   * Register listener for track-step event
   *
   * @memberof HttpUrlService
   */
  protected stepEventListener() {
    window.addEventListener('track-step', (ev: CustomEvent | any) => {
      const lastEvent = this.steps[this.steps.length - 1];

      if (
        lastEvent &&
        ev.detail.type === JOURNEY_INTERACTION_TYPE.SCROLL &&
        lastEvent.type === JOURNEY_INTERACTION_TYPE.SCROLL
      ) {
        this.steps.pop();
      }

      this.steps.push(ev.detail);

      this.trigger(ev);
    });
  }

  /**
   * @description
   * Register listener for track-meta event
   *
   * @param ev CustomEvent|JourneyMeta
   * @memberof HttpUrlService
   */
  private trigger(ev: CustomEvent): void {
    this.observe.next(ev);
    this.listener.next(ev);
  }

  /**
   * @description
   * Limits logs to an interval. When limit reaches
   * remove last log to keep collection on limit size defined.
   *
   * @param configurator ConfiguratorService
   * @memberof HttpUrlService
   */
  private reset(configurator: ConfiguratorService): void {
    const limit: number = configurator.getOption('JOURNEY_STACK_LIMIT', 20);

    this.observe.subscribe(() => {
      if (this.steps.length > limit) {
        this.steps.splice(0, 1);
      }
    });
  }
}
