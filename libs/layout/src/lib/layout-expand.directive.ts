/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LayoutExpandSettings } from './typings';
import { isEmpty } from 'lodash';

@Directive({
  selector: 'uiLayoutExpand, [uiLayoutExpand]'
})
export class LayoutExpandDirective implements OnInit, OnDestroy {

  @Input()
  set uiLayoutExpand(options: LayoutExpandSettings) {
    if(!isEmpty(options)) {
      this.settings = options;
    }
  };
  get uiLayoutExpand() {
    return this.settings;
  }

  @Input()
  isCollapsed = false;

  @Input()
  uiLayoutExpandRef: HTMLBaseElement;

  @Output()
  collapseOutsideClick: EventEmitter<boolean> = new EventEmitter();

  private element: HTMLElement;

  private document: HTMLDocument;

  private domListeners: Function[] = [];

  private settings = {
    collapseSize: 50,
    collapseWhenClickOutside: false
  };

  constructor(
    private readonly render: Renderer2,
    private readonly elRef: ElementRef,
    private readonly zone: NgZone,
    @Inject(DOCUMENT) doc: any
  ) {
    this.element = this.elRef.nativeElement;
    this.document = doc;
  }

  ngOnInit(): void {
    /*this.render.setStyle(this.element, 'position', 'relative');*/
    let originalWidth = 0;

    this.zone.runOutsideAngular(() => {
      const documentListener = this.render.listen(
        this.document,
        'mouseup',
        (ev: MouseEvent) => {
          ev.preventDefault();

          if (!this.uiLayoutExpandRef.contains(ev.target as HTMLBaseElement) && this.settings.collapseWhenClickOutside) {
            if (originalWidth === 0) {
              originalWidth = this.uiLayoutExpandRef.clientWidth;
            }

            this.render.setStyle(this.uiLayoutExpandRef, 'width', `${this.settings.collapseSize}px`);
            this.isCollapsed = true;

            this.collapseOutsideClick.emit(true);
          }
        }
      );

      const elementListener = this.render.listen(this.element, 'click', (ev: MouseEvent) => {
        ev.preventDefault();

        if (originalWidth === 0) {
          originalWidth = this.uiLayoutExpandRef.clientWidth;
        }

        if (!this.isCollapsed) {
          this.render.setStyle(this.uiLayoutExpandRef, 'width', `${this.settings.collapseSize}px`);
          this.isCollapsed = true;
          this.collapseOutsideClick.emit(true);
        } else {
          this.render.setStyle(this.uiLayoutExpandRef, 'width', `${originalWidth}px`);
          this.isCollapsed = false;
          originalWidth = 0;
          this.collapseOutsideClick.emit(false);
        }
      });

      this.domListeners.push(elementListener);
      this.domListeners.push(documentListener);
    });
  }

  ngOnDestroy(): void {
    this.domListeners.forEach(fn => fn());
  }
}
