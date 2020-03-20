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

@Directive({
  selector: 'uiLayoutExpand, [uiLayoutExpand]'
})
export class LayoutExpandDirective implements AfterViewChecked, OnInit, OnDestroy {

  @Input()
  uiLayoutExpand: LayoutExpandSettings = {
    collapseSize: 50,
    collapseWhenClickOutside: false
  };

  @Input()
  uiLayoutExpandTrigger: boolean;

  @Output()
  collapseOutsideClick: EventEmitter<boolean> = new EventEmitter();

  private element: HTMLElement;

  private document: HTMLDocument;

  private domListeners: Function[] = [];

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
      const elDownListener = this.render.listen(
        this.document,
        'mouseup',
        (ev: MouseEvent) => {
          ev.preventDefault();
          const target = ev.target as HTMLElement;

          if (!this.element.contains(target)) {
            this.collapseOutsideClick.emit(true);
            /*this.render.setStyle(this.element, 'display', 'none');
            if (this.uiLayoutExpandTrigger === true) {
              this.collapseOutsideClick.emit(false);
            }*/
          }
        }
      );

      this.domListeners.push(elDownListener);
    });
  }

  ngAfterViewChecked(): void {
    if (this.uiLayoutExpandTrigger) {
      this.render.setStyle(this.element, 'width', 400 + 'px');
      this.render.setStyle(this.element, 'display', 'block');
    } else {
      this.render.setStyle(this.element, 'display', 'none');
    }
  }

  ngOnDestroy(): void {
    this.domListeners.forEach(fn => fn());
  }
}
