/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { JOURNEY_INTERACTION_TYPE, TrackingOptions } from './journey.typings';
import { isObject, isBoolean, debounce, throttle, merge } from 'lodash';

/**
 * Tracking scroll behavior of a page. Beware that if body
 * is 100% height that this listener will not work.
 *
 */
export function TrackingScroll(): void {
  function handleScroll() {
    window.dispatchEvent(
      new CustomEvent('track-step', {
        detail: {
          type: JOURNEY_INTERACTION_TYPE.SCROLL,
          data: window.scrollY,
          time: Date.now(),
          location: document.location.href,
        },
      })
    );
  }

  window.addEventListener('scroll', debounce(handleScroll, 200));
}

/**
 * Track routing navigation on your main component.
 *
 * @param url String
 */
export function TrackingNavigation(url: string): void {
  window.dispatchEvent(
    new CustomEvent('track-step', {
      detail: {
        type: JOURNEY_INTERACTION_TYPE.URL_CHANGE,
        data: url,
        time: Date.now(),
        location: document.location.href,
      },
    })
  );
}

/**
 * Listen on events: click, dblclick, contextmenu and touch. Detail of this
 * will be: element id if present, element classes if present, tag,
 * position mouse (x,y) and type of event
 *
 */
export function TrackingInteraction(): void {
  function handleClickEvent(ev: MouseEvent | TouchEvent) {
    const el = ev.target as HTMLElement;

    window.dispatchEvent(
      new CustomEvent('track-step', {
        detail: {
          type: JOURNEY_INTERACTION_TYPE.CLICK,
          data: {
            id: el.id || 'None',
            classes: el.className || 'None',
            href: el.attributes.getNamedItem('href')
              ? el.attributes.getNamedItem('href').value
              : 'None',
            text: `
              Position(x,y): ${(ev as MouseEvent).clientX ? (ev as MouseEvent).clientX : 0} - ${(ev as MouseEvent).clientY ? (ev as MouseEvent).clientY : 0}
              Type: ${ev.type}
            `,
            tag: el.tagName,
          },
          time: Date.now(),
          location: document.location.href,
        },
      })
    );
  }

  window.addEventListener('click', handleClickEvent);
  window.addEventListener('dblclick', handleClickEvent);
  window.addEventListener('contextmenu', handleClickEvent);
  window.addEventListener('touch', handleClickEvent);
}

/**
 * Tracks every input, except password types.
 */
export function TrackingTyping(): void {
  function handleKeypressEvent(ev: KeyboardEvent) {
    const el = ev.target as HTMLInputElement;
    const type = el.attributes.getNamedItem('type') ? el.attributes.getNamedItem('type').value : 'none';

    window.dispatchEvent(
      new CustomEvent('track-step', {
        detail: {
          type: JOURNEY_INTERACTION_TYPE.TYPING,
          data: {
            id: el.id || 'None',
            classes: el.className || 'None',
            type: el.type || 'None',
            value: type !== 'password' ? el.value : 'Sensible user data',
            tag: el.tagName,
          },
          time: Date.now(),
          location: document.location.href,
        },
      })
    );
  }

  window.addEventListener('keypress', throttle(handleKeypressEvent, 1000));
}

/**
 * Tracks online/offline behavior of browser
 */
export function TrackingOnlineOffline(): void {
  function updateOnlineStatus() {
    const condition = navigator.onLine ? 'online' : 'offline';

    window.dispatchEvent(
      new CustomEvent('track-step', {
        detail: {
          type: JOURNEY_INTERACTION_TYPE.NETWORK,
          data: condition,
          time: Date.now(),
          location: document.location.href,
        },
      })
    );
  }

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
}

/**
 * Tracks geolocation of user.
 */
export function TrackingLocation() {
  navigator.geolocation.getCurrentPosition(
    position => {
      window.dispatchEvent(
        new CustomEvent('track-meta', {
          detail: {
            geolocation: position,
          },
        })
      );
    },
    () => {
      window.dispatchEvent(
        new CustomEvent('track-meta', {
          detail: {
            geolocation: 'Unable to get geolocation.',
          },
        })
      );
    },
    { enableHighAccuracy: true, maximumAge: 0, timeout: 5000 }
  );
}

/**
 * Tracks browser performance
 */
export function TrackingPerformance() {
  window.dispatchEvent(
    new CustomEvent('track-meta', {
      detail: {
        performance: window.performance.toJSON ? window.performance.toJSON() : window.performance.now(),
      },
    })
  );
}

/**
 * Function to dispatch trac-step event for your custom needs.
 *
 * @param type JOURNEY_INTERACTION_TYPE
 * @param {*} data
 */
export function TrackingAction(type: JOURNEY_INTERACTION_TYPE, data: any): void {
  window.dispatchEvent(
    new CustomEvent('track-step', {
      detail: {
        type,
        data,
        time: Date.now(),
        location: document.location.href,
      },
    })
  );
}

/**
 * Enable listeners and dispatch once track-meta event
 *
 * @param {(boolean | TrackingOptions)} [options=false]
 */
export function TrackingStart(options: boolean | TrackingOptions = false): void {
  window.dispatchEvent(
    new CustomEvent('track-meta', {
      detail: {
        startTime: Date.now(),
        startUrl: document.location.href,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        userAgent: navigator.userAgent,
      },
    })
  );

  if (isBoolean(options) && options) {
    TrackingOnlineOffline();
    TrackingLocation();
    TrackingPerformance();
    TrackingScroll();
    TrackingInteraction();
    TrackingTyping();
  } else if (isObject(options)) {
    options = merge(
      {},
      {
        network: false,
        location: false,
        performance: false,
        scroll: false,
        interaction: false,
        typing: false
      },
      options
    ) as TrackingOptions;

    if (options.network) { TrackingOnlineOffline(); }
    if (options.location) { TrackingLocation(); }
    if (options.performance) { TrackingPerformance(); }
    if (options.scroll) { TrackingScroll(); }
    if (options.interaction) { TrackingInteraction(); }
    if (options.typing) { TrackingTyping(); }
  }
}
