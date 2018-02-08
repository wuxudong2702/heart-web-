import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

import{AppRoutingModule}from './app-routing.module';
import { AppComponent } from './app.component';
 
import { PageNotFoundComponent } from './error-page/page-not-found/page-not-found.component';
// import { HomeComponent } from './main-content/home/home.component';
 


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SelectivePreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
