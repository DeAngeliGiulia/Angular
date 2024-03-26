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
{nome:'Charmander', tipo:'fuoco', percorso:'Pokémon iniziale dal Professor Oak a Biancavilla', abilità:'aiutofuoco', immagine:'./assets/charmander.png', altezza: '0,6 m', peso:'8,5kg', debolezze:'acqua, roccia, terra', sfondo: 'rgb(255, 223, 152)', color:'rgb(255, 123, 0)', bool: false},
{nome:'Bulbasaur', tipo:'erba-veleno', percorso:'Pokémon iniziale dal Professor Oak a Biancavilla', abilità:'erbaiuto', immagine:'./assets/bulbasaur.png', altezza: '0,7 m', peso:'6,9 kg', debolezze:'fuoco, ghiaccio, psico, volante', sfondo: 'rgb(158, 230, 208)', color:'rgb(78, 167, 152)', bool: false},
{nome:'Squirtle', tipo:'acqua', percorso:'Pokémon iniziale dal Professor Oak a Biancavilla', abilità:'acquaiuto', immagine:'./assets/squirtle.png', altezza: '0,5 m', peso:'9kg', debolezze:'elettro, erba', sfondo: 'rgb(146, 224, 255)', color:'rgb(31, 135, 167)', bool: false},
{nome:'Cyndaquil', tipo:'fuoco', percorso:'Pokémon iniziale dal Professor Elm a Borgo Foglianova', abilità:'aiutofuoco', immagine:'./assets/cyndaquil.png', altezza: '0,5 m', peso:'7,9kg', debolezze:'acqua, roccia, terra', sfondo: 'rgb(255, 223, 152)', color:'rgb(255, 123, 0)', bool: false},
{nome:'Chikorita', tipo:'erba', percorso:'Pokémon iniziale dal Professor Elm a Borgo Foglianova', abilità:'erbaiuto', immagine:'./assets/chikorita.png', altezza: '0,9 m', peso:'6,4kg', debolezze:'coleotttero, fuoco, ghiaccio, veleno, volante', sfondo: 'rgb(158, 230, 208)', color:'rgb(78, 167, 152)', bool: false},
{nome:'Totodile', tipo:'acqua', percorso:'Pokémon iniziale dal Professor Elm a Borgo Foglianova', abilità:'acquaiuto', immagine:'./assets/totodile.png', altezza: '0,6 m', peso:'9,5kg', debolezze:'elettro, erba', sfondo: 'rgb(146, 224, 255)', color:'rgb(31, 135, 167)', bool: false},

]
click(gen1: {nome: string}){
  if(gen1.nome == "Charmander"){
    this.gen1[0].bool = true

  }else if(gen1.nome == "Bulbasaur"){
    this.gen1[1].bool = true
  }else if(gen1.nome == "Squirtle"){
    this.gen1[2].bool = true
  }
  else if(gen1.nome == "Cyndaquil"){
    this.gen1[3].bool = true
  }
  else if(gen1.nome == "Chikorita"){
    this.gen1[4].bool = true
  }
  else if(gen1.nome == "Totodile"){
    this.gen1[5].bool = true
  }


} 

}
