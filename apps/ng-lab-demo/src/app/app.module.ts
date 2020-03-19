import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { NgxsDataPluginModule } from '@ngxs-labs/data';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ApplicationRoutingModule } from './app.routing';
import { ApplicationProvisionModule } from './app.provision';
import { ConfiguratorService } from '@ng-lab/configurator';
import { environment } from '@ng-lab/app/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ApplicationRoutingModule,
    ApplicationProvisionModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production }),
    NgxsDataPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    })
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
