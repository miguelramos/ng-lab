import { Injectable } from '@angular/core';
import { HttpUrlService } from '@ng-lab/http/url';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HomeModel } from './state/home-model';

@Injectable()
export class HomeService {
  constructor(
    private readonly urlService: HttpUrlService,
    private readonly httpService: HttpClient
  ) { }

  public fetchAll() {
    const url = this.urlService.get('HOME.FETCH');

    return this.httpService.get<{data: HomeModel}>(url).pipe(
      map(response => response.data)
    );
  }
}
