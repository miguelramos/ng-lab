/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { DOCUMENT } from '@angular/common';
import {
  AfterViewChecked,
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnChanges,
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
export class LayoutExpandDirective implements AfterViewChecked, OnInit, OnDestroy {

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
  uiLayoutExpandRef: HTMLBaseElement = null;

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

    this.zone.runOutsideAngular(() => {
      const elDownListener = this.render.listen(
        this.document,
        'mouseup',
        (ev: MouseEvent) => {
          ev.preventDefault();
          console.dir(this.uiLayoutExpandRef.clientWidth);
          console.dir(this.uiLayoutExpandRef.clientHeight);
          //this.render.setStyle(this.uiLayoutExpandRef, 'width', '50px');
          /*const target = ev.target as HTMLElement;

          if (!this.element.contains(target)) {
            this.collapseOutsideClick.emit(true);

          }*/
        }
      );

      this.domListeners.push(elDownListener);
    });

  }

  ngAfterViewChecked(): void {
    /*if (this.uiLayoutExpandTrigger) {
      this.render.setStyle(this.element, 'width', 400 + 'px');
      this.render.setStyle(this.element, 'display', 'block');
    } else {
      this.render.setStyle(this.element, 'display', 'none');
    }*/

  }

  ngOnDestroy(): void {
    this.domListeners.forEach(fn => fn());
  }
}
