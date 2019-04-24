import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportModule } from '@ng-lab/support';
import { RESPONSIVE_BREAKPOINTS_TOKEN, DEFAULT_RESPONSIVE_BREAKPOINTS_TOKEN, ResponsiveBreakpointDirective } from './responsive.directive';

@NgModule({
  imports: [CommonModule, SupportModule],
  providers: [
    {
      provide: RESPONSIVE_BREAKPOINTS_TOKEN,
      useValue: DEFAULT_RESPONSIVE_BREAKPOINTS_TOKEN
    }
  ],
  declarations: [ResponsiveBreakpointDirective],
  exports: [ResponsiveBreakpointDirective]
})
export class ResponsiveModule {}
