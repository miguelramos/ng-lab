import { action, NgxsDataRepository, StateRepository } from '@ngxs-labs/data';
import { Injectable } from '@angular/core';
import { PackageModel } from './packages-model';
import { State, Select } from '@ngxs/store';
import { PackagesService } from '../packages-service';
import { map, first, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@StateRepository()
@State<PackageModel>({
  name: 'packages',
  defaults: {
    id: null,
    title: null,
    slug: null,
    logo: null,
    description: null,
    namespace: null,
    badge: null,
    href: null
  }
})
@Injectable()
export class PackageState extends NgxsDataRepository<PackageModel> {
  @Select(state => state.packages)
  public packages$: Observable<PackageModel>;

  constructor(
    private readonly packageService: PackagesService
  ) {
    super();
  }

  @action()
  public getPackage(id: number) {
    return this.packageService.fetchAll().pipe(
      map(packages => packages.filter(pkg => pkg.id === id)),
      tap(packages => {
        const [ pkg ] = packages;

        this.setState((state) => ({...state, ...pkg}));
      })
    );
  }
}
