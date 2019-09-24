import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@ng-lab/layout';
import { AppComponent } from './app.component';
import { CodeModule } from './components/code/code.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    LayoutModule,
    CodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
