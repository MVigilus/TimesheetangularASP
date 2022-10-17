import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Util/modules/material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminGuard } from './guards/admin-guard.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    AdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
