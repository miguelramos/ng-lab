import { Component } from '@angular/core';

import { ResponsiveChangeInterface } from '@ng-lab/responsive';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'ng-lab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  responsive$: Observable<ResponsiveChangeInterface>;

  public handlerResponsiveChange(change: ResponsiveChangeInterface): void {
    this.responsive$ = of(change);
  }
}
