import { action, NgxsDataRepository, StateRepository } from '@ngxs-labs/data';
import { Injectable } from '@angular/core';
import { HomeModel } from './home-model';
import { State } from '@ngxs/store';
import { HomeService } from '../home-service';
import { tap } from 'rxjs/operators';

@StateRepository()
@State({
  name: 'home',
  defaults: {}
})
@Injectable()
export class HomeState extends NgxsDataRepository<HomeModel> {
  constructor(
    private readonly homeService: HomeService
  ) {
    super();
  }

  @action()
  public getContent() {
    return this.homeService.fetchAll().pipe(
      tap(content => this.ctx.setState(state => ({...state, ...content})))
    );
  }
}
