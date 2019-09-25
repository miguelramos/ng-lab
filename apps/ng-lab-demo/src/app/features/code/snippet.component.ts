import { Component, AfterViewInit, ViewChild, Input } from '@angular/core';

import { SnippetHighlightDirective } from './snippet-highlight.directive';

@Component({
  selector: 'ng-lab-code',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.scss']
})
export class SnippetComponent implements AfterViewInit {

  @ViewChild(SnippetHighlightDirective) codeHighlight: SnippetHighlightDirective;

  @Input() public code: string;
  @Input() public language = 'html';
  @Input() public disablePrism = false;

  ngAfterViewInit(): void {
    if (this.codeHighlight) {
      this.codeHighlight.redraw();
    }
  }
}
