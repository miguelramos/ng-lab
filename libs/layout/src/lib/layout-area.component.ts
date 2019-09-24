import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges
} from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'labLayoutArea',
  selector: 'ui-layout-area',
  template: '<ng-content></ng-content>'
})
export class LayoutAreaComponent implements AfterViewInit, OnChanges {
  @Input()
  display = 'flex';

  @HostBinding('style.flex-direction')
  @Input()
  flexDirection = 'column';

  @HostBinding('style.justify-content')
  @Input()
  justifyContent: string;

  @HostBinding('style.flex-wrap')
  @Input()
  flexWrap: string;

  @HostBinding('style.align-items')
  @Input()
  alignItems: string;

  @HostBinding('style.align-content')
  @Input()
  alignContent: string;

  @HostBinding('style.width')
  @Input()
  width: string;

  @HostBinding('style.height')
  @Input()
  height: string;

  @HostBinding('style.padding')
  @Input()
  padding: string;

  @HostBinding('style.margin')
  @Input()
  margin: string;

  @HostBinding('style.flex-basis')
  @Input()
  flexBasis: string;

  @HostBinding('style.flex-grow')
  @Input()
  flexGrow: number;

  @HostBinding('style.flex-shrink')
  @Input()
  flexShrink: number;

  @HostBinding('style.order')
  @Input()
  order: number;

  @HostBinding('style.align-self')
  @Input()
  alignSelf: string;

  private element: HTMLElement;

  constructor(
    private readonly render: Renderer2,
    private readonly elRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {
    this.element = this.elRef.nativeElement;
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.cdr.markForCheck();
  }

  ngAfterViewInit(): void {
    this.setupElementStyle();

    this.cdr.markForCheck();
  }

  private setupElementStyle(): void {
    if (this.display) {
      this.render.setStyle(this.element, 'display', this.display);
    }

    if (this.alignContent) {
      this.render.setStyle(this.element, 'align-content', this.alignContent);
    }

    if (this.alignItems) {
      this.render.setStyle(this.element, 'align-items', this.alignItems);
    }

    if (this.alignSelf) {
      this.render.setStyle(this.element, 'align-self', this.alignSelf);
    }

    if (this.flexBasis) {
      this.render.setStyle(this.element, 'flex-basis', this.flexBasis);
    }

    if (this.flexDirection) {
      this.render.setStyle(this.element, 'flex-direction', this.flexDirection);
    }

    if (this.flexGrow) {
      this.render.setStyle(this.element, 'flex-grow', this.flexGrow);
    }

    if (this.flexShrink) {
      this.render.setStyle(this.element, 'flex-shrink', this.flexShrink);
    }

    if (this.flexWrap) {
      this.render.setStyle(this.element, 'flex-wrap', this.flexWrap);
    }

    if (this.height) {
      this.render.setStyle(this.element, 'height', this.height);
    }

    if (this.justifyContent) {
      this.render.setStyle(
        this.element,
        'justify-content',
        this.justifyContent
      );
    }

    if (this.margin) {
      this.render.setStyle(this.element, 'margin', this.margin);
    }

    if (this.order) {
      this.render.setStyle(this.element, 'order', this.order);
    }

    if (this.padding) {
      this.render.setStyle(this.element, 'padding', this.padding);
    }

    if (this.width) {
      this.render.setStyle(this.element, 'width', this.width);
    }
  }
}
