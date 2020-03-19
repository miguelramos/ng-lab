import { Injectable } from '@angular/core';
import { HttpUrlService } from '@ng-lab/http/url';
import { HttpClient } from '@angular/common/http';
import { map, concatMap } from 'rxjs/operators';
import { HomeModel } from './state/home-model';

@Injectable()
export class HomeService {
  constructor(
    private readonly urlService: HttpUrlService,
    private readonly httpService: HttpClient
  ) { }

  public fetchAll() {
    const urlHome = this.urlService.get('HOME.FETCH');
    const urlPackages = this.urlService.get('PACKAGES.FETCH');

    return this.httpService.get<{data: HomeModel}>(urlHome).pipe(
      map(response => response.data),
      concatMap(homeModel => this.httpService.get<{data: any}>(urlPackages).pipe(
        map(response => ({packages: response.data, ...homeModel}))
      ))
    );
  }
}
