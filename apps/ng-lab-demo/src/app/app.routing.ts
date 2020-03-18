import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'packages',
        loadChildren:
          () => import('./pages/packages/packages.module').then(m => m.PackagesModule)
      }
    ]
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
