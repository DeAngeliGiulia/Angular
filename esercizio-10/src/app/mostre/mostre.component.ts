import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mostre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mostre.component.html',
  styleUrl: './mostre.component.css'
})
export class MostreComponent {

  mostre = [
    {nome:'Botticelli', pittore:'Sandro Botticelli', immagine:'./assets/botticelli.png', dInizio: new Date(2024, 5, 1), dFine: new Date(2024, 5, 4),},
    {nome:'Munch', pittore:'Edvard Munch', immagine:'./assets/munch.png', dInizio: new Date(2024, 5, 5), dFine: new Date(2024, 5, 9), descrizione: ''},
    {nome:'Picasso', pittore:'Pablo Picasso', immagine:'./assets/picasso.png', dInizio: new Date(2024, 5, 10), dFine: new Date(2024, 5, 13), descrizione: ''},
    {nome:'Van Gogh', pittore:'Vincent Van Gogh', immagine:'./assets/van-gogh.png', dInizio: new Date(2024, 5, 14), dFine: new Date(2024, 5, 17), descrizione: ''},
    {nome:'Monet', pittore:'Claude Monet', immagine:'./assets/monet.png', dInizio: new Date(2024, 5, 18), dFine: new Date(2024, 5 , 21), descrizione: ''},
    {nome:'Da Vinci', pittore:'Leonardo Da Vinci', immagine:'./assets/davinci.png', dInizio: new Date(2024, 5, 22), dFine: new Date(2024, 5, 26), descrizione: ''},
    {nome:'Vermeer', pittore:'Johannes Vermeer', immagine:'./assets/vermeer.png', dInizio: new Date(2024, 5, 27), dFine: new Date(2024, 5, 31), descrizione: ''},
    ]
}
