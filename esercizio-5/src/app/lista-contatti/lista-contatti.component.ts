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
    {nome: "Jack", cognome: "Sparrow", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "47", isOnline: false, colore: "orange"},
    {nome: "Jack", cognome: "Sparrow", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "50", isOnline: true, colore: "red"},
    {nome: "Jack", cognome: "Sparrow", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "50", isOnline: false, colore: "deeppink"},
    {nome: "Jack", cognome: "Sparrow", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "50", isOnline: false, colore: "blueviolet"},
    {nome: "Jack", cognome: "Sparrow", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "50", isOnline: false, colore: "blue"},
    {nome: "Jack", cognome: "Sparrow", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "50", isOnline: false, colore: "dodgerblue"},
    {nome: "Jack", cognome: "Sparrow", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "50", isOnline: false, colore: "deepskyblue"},
    {nome: "Jack", cognome: "Sparrow", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "50", isOnline: false, colore: "aqua"},
    {nome: "Jack", cognome: "Sparrow", immagine: "./assets/Jacksparrow.jpg", numero: "3473786291", eta: "50", isOnline: false, colore: "chartreuse"},
  ]
}

