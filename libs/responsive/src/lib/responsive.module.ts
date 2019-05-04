import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportModule } from '@ng-lab/support';
import { ResponsiveBreakpointDirective } from './responsive.directive';
import { RESPONSIVE_BREAKPOINTS_TOKEN, DEFAULT_RESPONSIVE_BREAKPOINTS_TOKEN } from './responsive.token';

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
