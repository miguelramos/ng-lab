import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { PackageState } from './state/packages.state';

@Injectable()
export class PackagesResolver implements Resolve<any> {
  constructor(
    private packageState: PackageState
  ) { }

  public resolve(route: ActivatedRouteSnapshot) {
    const pkgId = Number(route.paramMap.get('id'));

    return this.packageState.getPackage(pkgId);
  }
}
