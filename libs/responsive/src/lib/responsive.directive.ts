/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 *
 * Directive to declare once on top root to listen for changes on window resize.
 */
import {
  Output,
  Directive,
  HostListener,
  AfterViewInit,
  InjectionToken,
  Inject
} from '@angular/core';

import { Subject } from 'rxjs';

import { between } from '@ng-lab/support';

export interface Breakpoints {
  XS: number;
  SM: number;
  MD: number;
  LG: number;
  XL: number;
}

export const DEFAULT_RESPONSIVE_BREAKPOINTS_TOKEN: Breakpoints = {
  XS: 575,
  SM: 767,
  MD: 991,
  LG: 1199,
  XL: 1200
};

export const RESPONSIVE_BREAKPOINTS_TOKEN = new InjectionToken<Breakpoints>(
  '[RESPONSIVE] Breakpoints definitions.'
);

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ngResponsive, [ngResponsive]',
  exportAs: 'ngResponsive'
})
export class ResponsiveBreakpointDirective implements AfterViewInit {

  /**
   * Property to set endpoint reference
   *
   * @memberof ResponsiveBreakpointDirective
   */
  public breakpoint: string;

  /**
   * Property to subscribe for changes. It triggers
   * every time browser window is resized.
   *
   * @memberof ResponsiveBreakpointDirective
   */
  @Output()
  public responsiveChange = new Subject<{ width: number; key: string }>();

  /**
   * Property that listen window resize event.
   *
   * @memberof ResponsiveBreakpointDirective
   */
  @HostListener('window:resize', ['$event.target.innerWidth'])
  public onResize(width: number) {
    this.gridReference(width);
    this.responsiveChange.next({ width: width, key: this.breakpoint });
  }

  /**
   * Creates an instance of ResponsiveBreakpointDirective.
   *
   * @memberof ResponsiveBreakpointDirective
   */
  constructor(
    @Inject(RESPONSIVE_BREAKPOINTS_TOKEN) private breakpoints: Breakpoints
  ) {}

  /**
   * After view inited register the resize event listener.
   *
   * @memberof ResponsiveBreakpointDirective
   */
  ngAfterViewInit() {
    this.onResize(window.innerWidth);
  }

  /**
   * Check window breakpoint measures and define
   * breakpoint property reference.
   *
   * @memberof ResponsiveBreakpointDirective
   */
  private gridReference(width: number) {
    if (between(width, 0, this.breakpoints.XS)) {
      this.breakpoint = 'XS';
    }

    if (between(width, this.breakpoints.XS + 1, this.breakpoints.SM)) {
      this.breakpoint = 'SM';
    }

    if (between(width, this.breakpoints.SM + 1, this.breakpoints.MD)) {
      this.breakpoint = 'MD';
    }

    if (between(width, this.breakpoints.MD + 1, this.breakpoints.LG)) {
      this.breakpoint = 'LG';
    }

    if (width >= this.breakpoints.XL) {
      this.breakpoint = 'XL';
    }
  }
}
