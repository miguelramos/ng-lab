import { Injectable } from '@angular/core';
import { HttpUrlService } from '@ng-lab/http/url';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, toArray } from 'rxjs/operators';
import { PackageModel } from './state/packages-model';
import { from } from 'rxjs';
import { environment } from '@ng-lab/app/environments/environment';

@Injectable()
export class PackagesService {
  constructor(
    private readonly urlService: HttpUrlService,
    private readonly httpService: HttpClient
  ) { }

  public fetchAll() {
    const urlPackages = this.urlService.get('PACKAGES.FETCH');

    return this.httpService.get<{data: PackageModel[]}>(urlPackages).pipe(
      //map(response => response.data),
      mergeMap(response => from(response.data).pipe(
        map(pkg => {
          if (environment.production) {
            pkg.md = '/ng-lab/'+pkg.md;
          }

          return pkg;
        }),
        toArray()
      ))
    );
  }
}
