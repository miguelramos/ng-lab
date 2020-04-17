/**
 * @license
 * Copyright NgLab All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://www.ng-lab.com/license
 */
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Renderer2
} from '@angular/core';
import { EDGES, LayoutResizeSettings } from './typings';

@Directive({
  selector: 'uiLayoutResizer, [uiLayoutResizer]'
})
export class LayoutResizerDirective
  implements AfterViewInit, OnInit, OnDestroy {
  @Input()
  uiLayoutResizer: LayoutResizeSettings = {
    gutter: 4,
    edge: EDGES.BOTTOM,
    color: '#ccc'
  };

  @Input()
  set resizeMinimalWidth(width: number) {
    this.minimalWidth = width;
  }

  get resizeMinimalWidth(): number {
    return this.minimalWidth;
  }

  @Input()
  set resizeMinimalHeight(height: number) {
    this.minimalHeight = height;
  }

  get resizeMinimalHeight(): number {
    return this.minimalHeight;
  }

  positionX: number;

  positionY: number;

  private element: HTMLElement;

  private rectList: ClientRect | null;

  private document: HTMLDocument;

  private domListeners: Function[] = [];

  private edgeElement: HTMLDivElement;

  private minimalWidth = 0;
  private minimalHeight = 0;

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
    this.render.setStyle(this.element, 'position', 'relative');

    this.zone.runOutsideAngular(() => {
      this.createEdges();

      let repaint = false;
      let mouseMoveEvent: MouseEvent;
      let mouseDownEvent: MouseEvent | null = null;
      let elementHeight: number;
      let elementWidth: number;

      const docMoveListener = this.render.listen(
        this.document,
        'mousemove',
        (ev: MouseEvent) => {
          this.calculate(ev);

          repaint = true;
          mouseMoveEvent = ev;
        }
      );

      const docUpListener = this.render.listen(
        this.document,
        'mouseup',
        (ev: MouseEvent) => {
          this.calculate(ev);
          mouseDownEvent = null;
        }
      );

      const elDownListener = this.render.listen(
        this.edgeElement,
        'mousedown',
        (ev: MouseEvent) => {
          this.calculate(ev);
          mouseDownEvent = ev;
          elementHeight = this.rectList ? this.rectList.height : 0;
          elementWidth = this.rectList ? this.rectList.width : 0;
          ev.preventDefault();
        }
      );

      this.domListeners.push(docMoveListener, elDownListener, docUpListener);

      const framer = () => {
        requestAnimationFrame(framer);

        if (!repaint) {
          return;
        }

        repaint = false;

        if (mouseDownEvent) {
          if (this.uiLayoutResizer.edge === EDGES.RIGHT) {
            this.render.setStyle(
              this.element,
              'width',
              `${Math.max(this.positionX, this.resizeMinimalWidth)}px`
            );
          }

          if (this.uiLayoutResizer.edge === EDGES.BOTTOM) {
            this.render.setStyle(
              this.element,
              'height',
              `${Math.max(this.positionY, this.resizeMinimalHeight)}px`
            );
          }

          if (this.uiLayoutResizer.edge === EDGES.TOP && this.rectList) {
            const currentHeight = Math.max(
              mouseDownEvent.clientY - mouseMoveEvent.clientY + elementHeight,
              this.resizeMinimalHeight
            );

            if (currentHeight > this.resizeMinimalHeight) {
              this.render.setStyle(
                this.element,
                'height',
                `${currentHeight}px`
              );
              /*this.render.setStyle(
                this.element,
                'top',
                `${mouseMoveEvent.clientY}px`
              );*/
            }
          }

          if (this.uiLayoutResizer.edge === EDGES.LEFT && this.rectList) {
            const currentWidth = Math.max(
              mouseDownEvent.clientX - mouseMoveEvent.clientX + elementWidth,
              this.resizeMinimalWidth
            );

            if (currentWidth > this.resizeMinimalWidth) {
              this.render.setStyle(this.element, 'width', `${currentWidth}px`);
              /*this.render.setStyle(
                this.element,
                'left',
                `${mouseMoveEvent.clientX}px`
              );*/
            }
          }
        }

        this.setCursorStyle();
      };

      framer();
    });
  }

  ngAfterViewInit(): void {
    this.setAreasMeasures();
  }

  ngOnDestroy(): void {
    this.domListeners.forEach(fn => fn());
  }

  private createEdges(): void {
    const el = this.document.createElement('div');
    el.style.position = 'absolute';
    el.style.background = this.uiLayoutResizer.color;

    if (this.uiLayoutResizer.edge === EDGES.BOTTOM) {
      el.style.left = '0';
      el.style.right = '0';
      el.style.bottom = '0';
      el.style.height = `${this.uiLayoutResizer.gutter}px`;
      el.style.width = '100%';
    }

    if (this.uiLayoutResizer.edge === EDGES.TOP) {
      el.style.left = '0';
      el.style.right = '0';
      el.style.top = '0';
      el.style.height = `${this.uiLayoutResizer.gutter}px`;
      el.style.width = '100%';
    }

    if (this.uiLayoutResizer.edge === EDGES.LEFT) {
      el.style.left = '0';
      el.style.bottom = '0';
      el.style.top = '0';
      el.style.width = `${this.uiLayoutResizer.gutter}px`;
      el.style.height = '100%';
    }

    if (this.uiLayoutResizer.edge === EDGES.RIGHT) {
      el.style.right = '0';
      el.style.bottom = '0';
      el.style.top = '0';
      el.style.width = `${this.uiLayoutResizer.gutter}px`;
      el.style.height = '100%';
    }

    this.edgeElement = el;
    this.element.appendChild(el);
  }

  private setAreasMeasures(): void {
    this.rectList = this.element.getBoundingClientRect();
  }

  private calculate(ev: MouseEvent): void {
    this.setAreasMeasures();

    if (this.rectList) {
      this.positionX = ev.clientX - this.rectList.left;
      this.positionY = ev.clientY - this.rectList.top;
    }
  }

  private setCursorStyle(): void {
    if (
      this.uiLayoutResizer.edge === EDGES.LEFT ||
      this.uiLayoutResizer.edge === EDGES.RIGHT
    ) {
      this.render.setStyle(this.edgeElement, 'cursor', 'ew-resize');
    } else if (
      this.uiLayoutResizer.edge === EDGES.BOTTOM ||
      this.uiLayoutResizer.edge === EDGES.TOP
    ) {
      this.render.setStyle(this.edgeElement, 'cursor', 'ns-resize');
    } else {
      this.render.setStyle(this.edgeElement, 'cursor', 'default');
    }
  }
}
