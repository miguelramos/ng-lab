import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ApplicationRoutingModule } from './app.routing';
import { ConfiguratorService } from '@ng-lab/configurator';
import { ApplicationProvisionModule } from './app.provision';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ApplicationRoutingModule,
    ApplicationProvisionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ApplicationProvisionModule]
})
export class AppModule {
  constructor(
    readonly appRef: ApplicationRef,
    readonly config: ConfiguratorService
  ) {
    if (config.getOption('PRODUCTION') === false) {
      console.group('APPLICATION REFERENCE');
      console.dir(appRef);
      console.groupEnd();

      console.group('APPLICATION CONFIG');
      console.dir(config);
      console.groupEnd();
    }
  }
}
