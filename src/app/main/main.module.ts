import {NgModule} from '@angular/core';
 
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {MainRoutingModule} from './main-routing.module';
import {HomeComponent} from '../main-content/home/home.component';

/**
 * 主体模块
 */
 
@NgModule({
    imports: [
        MainRoutingModule
    ],
    declarations: [
        MainComponent,
        HomeComponent
    ],
    exports: [],
    providers: []
})
export class MainModule {
}
