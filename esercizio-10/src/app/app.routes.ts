import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MostreComponent } from './mostre/mostre.component';
import { MostraComponent } from './mostra/mostra.component';

export const routes: Routes = [
    {path: '', redirectTo: '/Home', pathMatch: 'full'},
    {path: 'Home', component: HomeComponent},
    {path: 'Mostre', component: MostreComponent},
    {path: 'Mostre/:x', component: MostraComponent},
];
