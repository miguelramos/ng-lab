import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfiguratorLabComponent } from './configurator-lab.component';

const routes: Routes = [
  {
    path: '',
    component: ConfiguratorLabComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [ConfiguratorLabComponent]
})
export class ConfiguratorLabRoutingModule { }
