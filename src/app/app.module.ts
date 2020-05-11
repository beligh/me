import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from '@app/shared/shared.module';
import {APP_BASE_HREF} from '@angular/common';
import {environment} from '../environments/environment';
import {NgxLoadingModule} from 'ngx-loading';
import {HttpClientModule} from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    NgxLoadingModule.forRoot({
      fullScreenBackdrop: false
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: environment.baseRef }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
