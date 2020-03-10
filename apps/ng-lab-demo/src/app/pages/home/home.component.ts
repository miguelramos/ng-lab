import { Component, OnInit } from '@angular/core';
import { HomeState } from './state/home.state';
import { Observable } from 'rxjs';
import { HomeModel } from './state/home-model';

@Component({
  selector: 'ng-lab-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home$: Observable<HomeModel>;

  constructor(
    private readonly homeState: HomeState
  ) {}

  ngOnInit() {
    this.home$ = this.homeState.home$;
  }

}
