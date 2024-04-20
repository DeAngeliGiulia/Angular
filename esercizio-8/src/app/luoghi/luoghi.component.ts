import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'luoghi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './luoghi.component.html',
  styleUrl: './luoghi.component.css'
})
export class LuoghiComponent {
  citta = [
    {nome:'Parigi', nazione:'Francia', immagine:'./assets/parigi.png', abitanti: '2,161 milioni', color:'rgb(255, 123, 0)', bool: false},
    {nome:'New York', nazione:'USA', immagine:'./assets/newyork.png', abitanti: '8,343 milioni', color:'rgb(50, 168, 113)', bool: false},
    {nome:'Londra', nazione:'Regno Unito', immagine:'./assets/londra.png', abitanti: '8,982 milioni', color:'rgb(31, 135, 167)', bool: false},
    {nome:'Barcellona', nazione:'Spagna', immagine:'./assets/barcellona.png', abitanti: '1,62 milioni', color:'rgb(255, 123, 0)', bool: false},
    {nome:'Roma', nazione:'Italia', immagine:'./assets/roma.png', abitanti: '2,161 milioni', color:'rgb(50, 168, 113)', bool: false},
    
    ]

    click(citta: {nome: string}){
      if(citta.nome == "Parigi"){
        (this.citta)[0].bool = true
    
      }else if(citta.nome == "New York"){
        (this.citta)[1].bool = true
      }
      else if(citta.nome == "Londra"){
        (this.citta)[2].bool = true
      }
      else if(citta.nome == "Barcellona"){
        (this.citta)[3].bool = true
      }
      else if(citta.nome == "Roma"){
        (this.citta)[4].bool = true
      }
    
    } 
    indietro(){
      this.citta[0].bool=false
      this.citta[1].bool=false
      this.citta[2].bool=false
      this.citta[3].bool=false
      this.citta[4].bool=false  
    }
}
