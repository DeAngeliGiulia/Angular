import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Second2Component } from './pag2/second2/second2.component';
import { Second3Component } from './pag3/second3/second3.component';

const routes : Routes = [
  {path: 'home', component: AppComponent},
  {path: 'biografia', component: Second2Component},
  {path: 'canzoni', component: Second3Component},
];

@NgModule({
  declarations: [AppComponent, Second2Component,Second3Component],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
