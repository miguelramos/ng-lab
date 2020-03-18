import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackagesComponent } from './packages.component';
import { PackagesResolver } from './packages-resolver';

const routes: Routes = [
  {
    path: ':id',
    component: PackagesComponent,
    resolve: {
      packages: PackagesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [PackagesResolver],
  exports: [RouterModule]
})
export class PackagesRoutingModule { }
