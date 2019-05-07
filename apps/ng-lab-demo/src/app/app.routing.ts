import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [];

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
