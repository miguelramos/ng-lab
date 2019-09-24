import { NgModule } from '@angular/core';
import { CodeHighlightService } from './code-highlight.service';
import { CodeComponent } from './code.component';

@NgModule({
  declarations: [CodeComponent],
  exports: [CodeComponent],
  providers: [CodeHighlightService]
})
export class CodeModule {}
