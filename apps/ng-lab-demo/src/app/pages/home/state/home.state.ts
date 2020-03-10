import { action, NgxsDataRepository, StateRepository } from '@ngxs-labs/data';
import { Injectable } from '@angular/core';
import { HomeModel } from './home-model';
import { State, Select } from '@ngxs/store';
import { HomeService } from '../home-service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@StateRepository()
@State<HomeModel>({
  name: 'home',
  defaults: {
    title: null,
    description: null
  }
})
@Injectable()
export class HomeState extends NgxsDataRepository<HomeModel> {
  @Select(state => state.home)
  public home$: Observable<HomeModel>;

  constructor(
    private readonly homeService: HomeService
  ) {
    super();
  }

  @action()
  public getContent() {
    return this.homeService.fetchAll().pipe(
      tap(content => {
        this.ctx.setState(content);
        return content;
      })
    );
  }
}
