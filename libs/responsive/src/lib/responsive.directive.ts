/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import {
  Output,
  Directive,
  HostListener,
  AfterViewInit,
  Inject
} from '@angular/core';

import { Subject } from 'rxjs';

import { between } from '@ng-lab/support';
import { Breakpoints } from './responsive.typing';
import { RESPONSIVE_BREAKPOINTS_TOKEN } from './responsive.token';

/**
 * @description
 * Directive to declare once on top root to listen for changes on window resize.
 *
 * @usageNotes
 *
 * To use just declare the directive on html tag.
 *
 * ```html
 * <p ngResponsive>A responsive directive</p>
 * ```
 *
 * @ngModule ResponsiveModule
 * @publicApi
 */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ngResponsive, [ngResponsive]',
  exportAs: 'ngResponsive'
})
export class ResponsiveBreakpointDirective implements AfterViewInit {

  /**
   * @description
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
   * @description
   * Property that listen window resize event.
   *
   * @param width Width window size
   * @memberof ResponsiveBreakpointDirective
   */
  @HostListener('window:resize', ['$event.target.innerWidth'])
  public onResize(width: number) {
    this.gridReference(width);
    this.responsiveChange.next({ width: width, key: this.breakpoint });
  }

  /**
   * @description
   * Creates an instance of ResponsiveBreakpointDirective.
   *
   * @memberof ResponsiveBreakpointDirective
   */
  constructor(
    @Inject(RESPONSIVE_BREAKPOINTS_TOKEN) private breakpoints: Breakpoints
  ) {}

  /**
   * @description
   * After view inited register the resize event listener.
   *
   * @memberof ResponsiveBreakpointDirective
   */
  ngAfterViewInit() {
    this.onResize(window.innerWidth);
  }

  /**
   * @description
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
