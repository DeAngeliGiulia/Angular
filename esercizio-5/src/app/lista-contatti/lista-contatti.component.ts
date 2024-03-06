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
    {nome: "Tony", cognome: "Stark", immagine: "./assets/tony.jpg", numero: "3315946479"},
    {nome: "", cognome: "", numero: ""},
    {nome: "", cognome: "", numero: ""},
    {nome: "", cognome: "", numero: ""},
  ]
}

