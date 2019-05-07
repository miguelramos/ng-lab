import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAreaComponent } from './layout-area.component';
import { LayoutResizerDirective } from './layout-resize.directive';

@NgModule({
  declarations: [LayoutAreaComponent, LayoutResizerDirective],
  exports: [LayoutResizerDirective, LayoutAreaComponent],
  imports: [CommonModule]
})
export class LayoutModule {}
