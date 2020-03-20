import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAreaComponent } from './layout-area.component';
import { LayoutResizerDirective } from './layout-resize.directive';
import { LayoutExpandDirective } from './layout-expand.directive';

@NgModule({
  declarations: [LayoutAreaComponent, LayoutResizerDirective, LayoutExpandDirective],
  exports: [LayoutResizerDirective, LayoutAreaComponent, LayoutExpandDirective],
  imports: [CommonModule]
})
export class LayoutModule {}
