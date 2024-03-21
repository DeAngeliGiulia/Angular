import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { cwd } from 'process';

@Component({
  selector: 'lista-giocatori',
  standalone: true,
  imports: [ MatCardModule, MatButtonModule, CommonModule, MatButtonModule, RouterOutlet],
  templateUrl: './lista-giocatori.component.html',
  styleUrl: './lista-giocatori.component.css'
})
export class ListaGiocatoriComponent {
  
  giocatori = [
    {nome: "Edward 'Edward' Dapadap", nazionalita: "Filippine", personaggio: "Paquito", eta: "19", ruolo: "corsia EXP", foto: "../assets/Edward.png", link: "https://liquipedia.net/mobilelegends/Edward"},
    {nome: "Nicky 'Kiboy' Pontonuwu", nazionalita: "Indonesia", personaggio: "Chou", eta: "21", ruolo: "roam", foto: "../assets/Kiboy.png", link: "https://liquipedia.net/mobilelegends/Kiboy"},
    {nome: "Calvin 'CW' Winata", nazionalita: "Indonesia", personaggio: "Bruno", eta: "23", ruolo: "corsia gold", foto: "../assets/CW.png", link: "https://liquipedia.net/mobilelegends/CW"},
    {nome: "Angelo 'Pheww' Arcangel", nazionalita: "Filippine", personaggio: "Selena", eta: "24", ruolo: "corsia centrale", foto: "../assets/Pheww.png", link: "https://liquipedia.net/mobilelegends/Pheww"},
    {nome: "Kairi 'Kairi' Rayosdelsol", nazionalita: "Filippine", personaggio: "Hayabusa", eta: "18", ruolo: "giungla", foto: "../assets/Kairi.png", link: "https://liquipedia.net/mobilelegends/Kairi"},
    {nome: "Muhammad 'Butsss' Sanubari", nazionalita: "Indonesia", personaggio: "Uranus", eta: "22", ruolo: "corsia EXP", foto: "../assets/Butss.png", link: "https://liquipedia.net/mobilelegends/Butss"},
    {nome: "Kiel 'Oheb' Q.Soriano", nazionalita: "Filippine", personaggio: "Beatrix", eta: "19", ruolo: "corsia gold", foto: "../assets/Oheb.png", link: "https://liquipedia.net/mobilelegends/Oheb"},
    {nome: "Jonmar 'OhMyV33NUS' Villaluna", nazionalita: "Filippine", personaggio: "Estes", eta: "29", ruolo: "roam", foto: "../assets/OhMyV33nus.png", link: "https://liquipedia.net/mobilelegends/OhMyV33NUS"},
    {nome: "Danerie 'Wise' Rosario", nazionalita: "Filippine", personaggio: "Yi Sun-shin", eta: "23", ruolo: "giungla", foto: "../assets/Wise.png", link: "https://liquipedia.net/mobilelegends/Wise"},
    {nome: "NataGilang 'S A N Z' sha", nazionalita: "Indonesia", personaggio: "Pharsa", eta: "21", ruolo: "corsia centrale", foto: "../assets/Sanz.png", link: "https://liquipedia.net/mobilelegends/S_A_N_Z"},
  ]

  clicca(index:number){
    var giocatori = this.giocatori[index];
    window.open(giocatori.link)
  }
}
