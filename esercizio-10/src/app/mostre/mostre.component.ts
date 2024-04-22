import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DettagliServizioService } from '../dettagli-servizio.service';


@Component({
  selector: 'app-mostre',
  standalone: true,
  imports: [CommonModule, RouterLink,],
  templateUrl: './mostre.component.html',
  styleUrl: './mostre.component.css'
})
export class MostreComponent {
  constructor(public Dati: DettagliServizioService){
  }

  dettagli(id:any){
    window.location.href = '/Dettagli/' + id;
  }
}
