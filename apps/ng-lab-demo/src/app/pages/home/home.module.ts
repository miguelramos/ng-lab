import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './home-service';
import { NgxsModule } from '@ngxs/store';
import { HomeState } from './state/home.state';

@NgModule({
  declarations: [HomeComponent],
  providers: [HomeService],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxsModule.forFeature([HomeState])
  ]
})
export class HomeModule {}
