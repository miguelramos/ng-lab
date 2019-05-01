import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ErrorDetails {
  [key: string]: any;
}

@NgModule({
  imports: [CommonModule]
})
export class SupportModule {}
