import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      enableTracing: false,
      initialNavigation: 'enabled',
      useHash: false
    })
  ],
  exports: [RouterModule]
})
export class ApplicationRoutingModule {}
