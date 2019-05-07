import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClarityModule } from '@clr/angular';

import { HttpUrlModule } from '@ng-lab/http/url';
import { ResponsiveModule } from '@ng-lab/responsive';
import { ConfiguratorModule } from '@ng-lab/configurator';

import { CONFIG } from './app.config';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ConfiguratorModule.forRoot(CONFIG),
    HttpUrlModule,
    ClarityModule,
    ResponsiveModule
  ],
  exports: [ConfiguratorModule, HttpUrlModule, ClarityModule, ResponsiveModule]
})
export class ApplicationProvisionModule { }
