import { Component, OnInit } from '@angular/core';
import { EDGES } from '@ng-lab/layout';
import { Snippet } from './components/code/code-snipet';

import { ResponsiveChangeInterface } from '@ng-lab/responsive';
import { of, Observable } from 'rxjs';
import { Router, RouterEvent, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { TrackingNavigation } from '@ng-lab/journey';

@Component({
  selector: 'ng-lab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-lab-demo';

  edgeSettings = {
    gutter: 4,
    edge: EDGES.RIGHT,
    color: 'transparent'
  };

  configExample = Snippet({
    lang: 'typescript',
    code: `
    const configuratorService: ConfiguratorService = new ConfiguratorService();

    const settings = {
      one: 1,
      setting: 2,
      with: {
        deep: {
          notation: 3
        }
      }
    };

    configuratorService.setOption('settings', settings);
    configuratorService.hasOption('settings.with.deep.notation');
    `
  });

  responsive$: Observable<ResponsiveChangeInterface>;

  sidebarVisible = true;

  constructor(
    private router: Router
  ) {}

  public handlerResponsiveChange(change: ResponsiveChangeInterface): void {
    this.responsive$ = of(change);
  }

  public whenCollapse(visible: boolean) {
    this.sidebarVisible = !visible;
  }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: RouterEvent) {
    if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
      TrackingNavigation(event.url);
    }
  }
}
