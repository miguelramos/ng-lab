import { isPlatformBrowser } from '@angular/common';
import * as Prism from 'prismjs';
import { Directive, ElementRef, Inject, Input, PLATFORM_ID, Renderer2, AfterContentInit } from '@angular/core';

//declare var Prism: ;

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'code[lab-code-highlight]'
})
export class SnippetHighlightDirective implements AfterContentInit {
  private _highlight = '';

  constructor(private _el: ElementRef, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterContentInit(): void {
    this.redraw();
  }

  public redraw() {
    // Only run Prism in browser engines
    if (this._el && this._el.nativeElement && isPlatformBrowser(this.platformId)) {
      Prism.highlightElement(this._el.nativeElement);
    }
  }

  @Input('lab-code-highlight')
  set highlight(val: string) {
    if (val && val.trim() !== '') {
      this._highlight = val;
      this.renderer.addClass(this._el.nativeElement, this._highlight);
    }
  }

  get highlight(): string {
    return this._highlight;
  }
}
