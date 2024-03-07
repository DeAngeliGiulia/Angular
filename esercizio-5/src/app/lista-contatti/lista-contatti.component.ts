import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'lista-contatti',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatExpansionModule],
  templateUrl: './lista-contatti.component.html',
  styleUrl: './lista-contatti.component.css'
})
export class ListaContattiComponent {

  panelOpenState = false;
  
  persone = [
    {nome: "Tony", cognome: "Stark", immagine: "./assets/tony.jpg", numero: "3315946479", eta: "43", isOnline: true, colore: "rosso", sfondo: "rgb(252, 255, 92)"},
    {nome: "Arthur", cognome: "Curry", immagine: "./assets/arthur.jpg", numero: "3473786291", eta: "57", isOnline: false, colore: "azzurro", sfondo: "rgb(255, 190, 92)"},
    {nome: "Selina", cognome: "Kyle", immagine: "./assets/Selina.jpg", numero: "3476482575", eta: "32", isOnline: true, colore: "nero", sfondo: "rgb(255, 92, 92)"},
    {nome: "Peter", cognome: "Parker", immagine: "./assets/Peter.jpg", numero: "3315693627", eta: "28", isOnline: true, colore: "verde", sfondo: "rgb(255, 92, 193)"},
    {nome: "Bruce", cognome: "Wayne", immagine: "./assets/bruce.jpg", numero: "3473786201", eta: "44", isOnline: false, colore: "arancione", sfondo: "rgb(203, 92, 255)"},
    {nome: "Clark", cognome: "Kent", immagine: "./assets/clark.jpg", numero: "3475786291", eta: "34", isOnline: false, colore: "blu", sfondo: "rgb(127, 92, 255)"},
    {nome: "Kara", cognome: "Danvers", immagine: "./assets/kara.jpg", numero: "3478780293", eta: "26", isOnline: true, colore: "rosa", sfondo: "rgb(92, 116, 255) "},
    {nome: "Diana", cognome: "Prince", immagine: "./assets/diana.jpg", numero: "3473786281", eta: "5000", isOnline: false, colore: "rosso", sfondo: "rgb(92, 190, 255)"},
    {nome: "Carol", cognome: "Danvers", immagine: "./assets/carol.jpg", numero: "3473085291", eta: "30", isOnline: true, colore: "giallo", sfondo: "rgb(92, 236, 255)"},
    {nome: "Natasha", cognome: "Romanoff", immagine: "./assets/natasha.jpg", numero: "3473586911", eta: "32", isOnline: false, colore: "bianco", sfondo: "rgb(92, 255, 155)"},
  ]
}

