import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeResolver } from './home-resolver';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
    resolve: {
      content: HomeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [HomeResolver],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
