import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from '@app/shared/shared.module';
import {APP_BASE_HREF} from '@angular/common';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,

  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: environment.baseRef }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
