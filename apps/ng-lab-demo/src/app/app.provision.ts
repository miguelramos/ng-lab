import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpUrlModule } from '@ng-lab/http/url';
import { ResponsiveModule } from '@ng-lab/responsive';
import { ConfiguratorModule } from '@ng-lab/configurator';
import { LayoutModule } from '@ng-lab/layout';
import { MarkdownModule } from 'ngx-markdown';
import { JourneyModule, TrackingHttpRequest } from '@ng-lab/journey';

import { CONFIG } from './app.config';
import { CodeModule } from './components/code/code.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ConfiguratorModule.forRoot(CONFIG),
    HttpUrlModule,
    ResponsiveModule,
    CodeModule,
    LayoutModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
    JourneyModule.forRoot(true)
  ],
  exports: [
    ConfiguratorModule,
    HttpUrlModule,
    ResponsiveModule,
    CodeModule,
    LayoutModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TrackingHttpRequest, multi: true }
  ]
})
export class ApplicationProvisionModule {}
