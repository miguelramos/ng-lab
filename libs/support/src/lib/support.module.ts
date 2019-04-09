import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RESPONSIVE_BREAKPOINTS_TOKEN, DEFAULT_RESPONSIVE_BREAKPOINTS_TOKEN, ResponsiveBreakpointDirective } from './responsive.directive';

@NgModule({
  imports: [CommonModule],
  providers: [
    {
      provide: RESPONSIVE_BREAKPOINTS_TOKEN,
      useValue: DEFAULT_RESPONSIVE_BREAKPOINTS_TOKEN
    }
  ],
  declarations: [ResponsiveBreakpointDirective],
  exports: [ResponsiveBreakpointDirective]
})
export class SupportModule {}
