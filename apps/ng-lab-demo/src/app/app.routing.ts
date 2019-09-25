import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: './pages/home/home.module#HomeModule'
      },
      {
        path: 'configurator',
        loadChildren:
          './pages/configurator-lab/configurator-lab.module#ConfiguratorLabModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      enableTracing: true,
      initialNavigation: 'enabled',
      useHash: false
    })
  ],
  exports: [RouterModule]
})
export class ApplicationRoutingModule {}
