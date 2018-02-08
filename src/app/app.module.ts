import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import{AppRoutingModule}from './app-routing.module';
import { AppComponent } from './app.component';
 
import { PageNotFoundComponent } from './error-page/page-not-found/page-not-found.component';
// import { HomeComponent } from './main-content/home/home.component';
 import {ApiServeService} from './serve/api-serve/api-serve.service'
 import {HttpClient} from '@angular/common/http';
 import {HttpModule} from '@angular/http';
 import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    SelectivePreloadingStrategy,
    ApiServeService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
