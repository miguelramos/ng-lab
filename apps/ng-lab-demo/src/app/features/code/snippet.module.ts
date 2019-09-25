import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnippetComponent } from './snippet.component';
import { SnippetHighlightDirective } from './snippet-highlight.directive';

@NgModule({
  declarations: [SnippetComponent, SnippetHighlightDirective],
  imports: [
    CommonModule
  ],
  exports: [SnippetComponent, SnippetHighlightDirective]
})
export class SnippetModule { }
