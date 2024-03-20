import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule, CommonModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  panelOpenState = false;
  
  giocatori = [
    {nome: "Edward 'Edward' Dapadap", nazionalita: "Filippine", personaggio: "Paquito", eta: "19", ruolo: "corsia EXP", sfondo: "rgb(252, 255, 92)"},
    {nome: "Muhammad 'Butsss' Sanubari", nazionalita: "Indonesia", personaggio: "Uranus", eta: "22", ruolo: "corsia EXP", sfondo: "rgb(255, 190, 92)"},
    {nome: "Nicky 'Kiboy' Pontonuwu", nazionalita: "Indonesia", personaggio: "Chou", eta: "21", ruolo: "roam", sfondo: "rgb(255, 92, 92)"},
    {nome: "Calvin 'CW' Winata", nazionalita: "Indonesia", personaggio: "Bruno", eta: "23", ruolo: "corsia gold", sfondo: "rgb(255, 92, 193)"},
    {nome: "Angelo 'Pheww' Arcangel", nazionalita: "Filippine", personaggio: "Selena", eta: "24", ruolo: "corsia centrale", sfondo: "rgb(203, 92, 255)"},
    {nome: "Kairi 'Kairi' Rayosdelsol", nazionalita: "Filippine", personaggio: "Hayabusa", eta: "18", ruolo: "giungla", sfondo: "rgb(127, 92, 255)"},
    {nome: "Kiel 'Oheb' Q.Soriano", nazionalita: "Filippine", personaggio: "Beatrix", eta: "19", ruolo: "corsia gold", sfondo: "rgb(92, 116, 255) "},
    {nome: "Jonmar 'OhMyV33NUS' Villaluna", nazionalita: "Filippine", personaggio: "Estes", eta: "29", ruolo: "roam", sfondo: "rgb(92, 190, 255)"},
    {nome: "Danerie 'Wise' Rosario", nazionalita: "Filippine", personaggio: "Yi Sun-shin", eta: "23", ruolo: "giungla", sfondo: "rgb(92, 236, 255)"},
    {nome: "NataGilang 'S A N Z' sha", nazionalita: "Indonesia", personaggio: "Pharsa", eta: "21", ruolo: "corsia centrale", sfondo: "rgb(92, 255, 155)"},
  ]
}
