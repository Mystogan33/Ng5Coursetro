import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ThirdComponentComponent } from './third-component/third-component.component';

import { DataService } from './data.service';

import { MaterializeModule } from 'angular2-materialize';
import { MainHomeComponent } from './main-home/main-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ThirdComponentComponent,
    MainHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterializeModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
