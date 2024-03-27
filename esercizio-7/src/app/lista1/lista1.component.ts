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
{nome:'Charmander', tipo:'fuoco', immagine_tipo:'../../assets/fuoco.png', percorso:'Pokémon iniziale dal Professor Oak a Biancavilla', abilita:'aiutofuoco', immagine:'./assets/charmander.png', altezza: '0,6 m', peso:'8,5kg', debolezze:'acqua, roccia, terra', sfondo: 'rgb(255, 223, 152)', color:'rgb(255, 123, 0)', bool: false},
{nome:'Bulbasaur', tipo:'erba-veleno', immagine_tipo:'../../assets/verde.png', immagine_tipo1:'../../assets/veleno.png', percorso:'Pokémon iniziale dal Professor Oak a Biancavilla', abilita:'erbaiuto', immagine:'./assets/bulbasaur.png', altezza: '0,7 m', peso:'6,9 kg', debolezze:'fuoco, ghiaccio, psico, volante', sfondo: 'rgb(116, 255, 139)', color:'   rgb(50, 168, 113)', bool: false},
{nome:'Squirtle', tipo:'acqua', immagine_tipo:'../../assets/acqua.png', percorso:'Pokémon iniziale dal Professor Oak a Biancavilla', abilita:'acquaiuto', immagine:'./assets/squirtle.png', altezza: '0,5 m', peso:'9kg', debolezze:'elettro, erba', sfondo: 'rgb(146, 224, 255)', color:'rgb(31, 135, 167)', bool: false},
{nome:'Cyndaquil', tipo:'fuoco', immagine_tipo:'../../assets/fuoco.png', percorso:'Pokémon iniziale dal Professor Elm a Borgo Foglianova', abilita:'aiutofuoco', immagine:'./assets/cyndaquil.png', altezza: '0,5 m', peso:'7,9kg', debolezze:'acqua, roccia, terra', sfondo: 'rgb(255, 223, 152)', color:'rgb(255, 123, 0)', bool: false},
{nome:'Chikorita', tipo:'erba', immagine_tipo:'../../assets/verde.png', percorso:'Pokémon iniziale dal Professor Elm a Borgo Foglianova', abilita:'erbaiuto', immagine:'./assets/chikorita.png', altezza: '0,9 m', peso:'6,4kg', debolezze:'coleottero, fuoco, ghiaccio, veleno, volante', sfondo: 'rgb(116, 255, 139)', color:'  rgb(50, 168, 113)', bool: false},
{nome:'Totodile', tipo:'acqua', immagine_tipo:'../../assets/acqua.png', percorso:'Pokémon iniziale dal Professor Elm a Borgo Foglianova', abilita:'acquaiuto', immagine:'./assets/totodile.png', altezza: '0,6 m', peso:'9,5kg', debolezze:'elettro, erba', sfondo: 'rgb(146, 224, 255)', color:'rgb(31, 135, 167)', bool: false},

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
indietro(){
  this.gen1[0].bool=false
  this.gen1[1].bool=false
  this.gen1[2].bool=false
  this.gen1[3].bool=false
  this.gen1[4].bool=false
  this.gen1[5].bool=false



  
}
}