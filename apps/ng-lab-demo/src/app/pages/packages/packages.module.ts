import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages.component';
import { PackageState } from './state/packages.state';
import { NgxsModule } from '@ngxs/store';
import { PackagesService } from './packages-service';
import { LayoutModule } from '@ng-lab/layout';
import { CodeModule } from '../../components/code/code.module';

@NgModule({
  declarations: [PackagesComponent],
  providers: [PackagesService],
  imports: [
    CommonModule,
    LayoutModule,
    CodeModule,
    PackagesRoutingModule,
    NgxsModule.forFeature([PackageState])
  ]
})
export class PackagesModule { }
