import { Component, OnInit } from '@angular/core';
import { HomeState } from './state/home.state';
import { Observable } from 'rxjs';
import { HomeModel } from './state/home-model';
import { chunk } from '@ng-lab/support';
import { map, pluck } from 'rxjs/operators';

@Component({
  selector: 'ng-lab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private readonly home$: Observable<HomeModel>;

  title$: Observable<string>;
  description$: Observable<string>;
  packages$: Observable<[HomeModel['packages']]>;

  log = console.log;

  constructor(
    private readonly homeState: HomeState
  ) {
    this.home$ = this.homeState.home$;
  }

  ngOnInit() {
    this.title$ = this.home$.pipe(
      pluck('title')
    );

    this.description$ = this.home$.pipe(
      pluck('description')
    );

    this.packages$ = this.home$.pipe(
      pluck('packages')
    );
  }

}
