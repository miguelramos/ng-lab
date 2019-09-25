import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { HomeState } from './state/home.state';

@Injectable()
export class HomeResolver implements Resolve<any> {
  constructor(
    private homeState: HomeState
  ) { }

  public resolve() {
    return this.homeState.getContent();
  }
}
