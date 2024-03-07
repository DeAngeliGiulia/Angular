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
    {nome: "Tony", cognome: "Stark", immagine: "./assets/tony.jpg", numero: "3315946479", eta: "50", isOnline: false, colore: "yellow"},
    {nome: "Jack", cognome: "Sparrow", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "47", isOnline: true, colore: "orange"},
    {nome: "Dwayne", cognome: "Johnson", immagine: "./assets/Jacksparrow.jpg", numero: "3476482575", eta: "50", isOnline: true, colore: "red"},
    {nome: "Peter", cognome: "Parker", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "50", isOnline: true, colore: "deeppink"},
    {nome: "Bruce", cognome: "Wayne", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "50", isOnline: false, colore: "blueviolet"},
    {nome: "Clark", cognome: "Kent", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "50", isOnline: false, colore: "royalblue"},
    {nome: "Kara", cognome: "Danvers", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "50", isOnline: true, colore: "dodgerblue"},
    {nome: "Jack", cognome: "Sparrow", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "50", isOnline: false, colore: "deepskyblue"},
    {nome: "Carol", cognome: "Danvers", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "50", isOnline: true, colore: "aqua"},
    {nome: "Natasha", cognome: "Romanova", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "50", isOnline: false, colore: "chartreuse"},
  ]
}

