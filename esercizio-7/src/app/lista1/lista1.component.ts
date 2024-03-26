import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lista1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista1.component.html',
  styleUrl: './lista1.component.css'
})
export class Lista1Component {

gen1 = [
{nome:'Charmander', tipo:'fuoco', percorso:'Pokémon iniziale dal Professor Oak a Biancavilla', abilità:'aiutofuoco', immagine:'./assets/charmander.png', altezza: '0,6 m', peso:'8,5kg', debolezze:'acqua, roccia, terra'},
{nome:'Bulbasaur', tipo:'erba-veleno', percorso:'Pokémon iniziale dal Professor Oak a Biancavilla', abilità:'erbaiuto', immagine:'./assets/bulbasaur.png', altezza: '0,7 m', peso:'6,9 kg', debolezze:'fuoco, ghiaccio, psico, volante'},
{nome:'Squirtle', tipo:'acqua', percorso:'Pokémon iniziale dal Professor Oak a Biancavilla', abilità:'acquaiuto', immagine:'./assets/squirtle.png', altezza: '0,5 m', peso:'9kg', debolezze:''},
{nome:'Totodile', tipo:'acqua', percorso:'Pokémon iniziale dal Professor Oak a Biancavilla', abilità:'acquaiuto', immagine:'./assets/squirtle.png', altezza: '0,5 m', peso:'9kg', debolezze:''},
{nome:'Cyndaquil', tipo:'acqua', percorso:'Pokémon iniziale dal Professor Oak a Biancavilla', abilità:'acquaiuto', immagine:'./assets/squirtle.png', altezza: '0,5 m', peso:'9kg', debolezze:''},
{nome:'Chikorita', tipo:'acqua', percorso:'Pokémon iniziale dal Professor Oak a Biancavilla', abilità:'acquaiuto', immagine:'./assets/squirtle.png', altezza: '0,5 m', peso:'9kg', debolezze:''},

]
click(index: number){
  var gen1 = this.gen1[index];

} 

}
