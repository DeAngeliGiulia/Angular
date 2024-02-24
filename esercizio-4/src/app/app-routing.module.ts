import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { AppComponent } from './app.component';

const routes : Route = [
  {path: '', component: AppComponent}
],

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
