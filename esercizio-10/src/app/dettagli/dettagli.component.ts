import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DettagliServizioService } from '../dettagli-servizio.service';

@Component({
  selector: 'app-dettagli',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dettagli.component.html',
  styleUrl: './dettagli.component.css'
})
export class DettagliComponent {
identificatore: any;
nome: any;
descrizione: any;
constructor(private route: ActivatedRoute, public provaService: DettagliServizioService){

}
ngOnInit(){
  this.identificatore = this.route.snapshot.paramMap.get('id');
  this.nome = this.provaService.dati[this.identificatore].nome;
  this.descrizione = this.provaService.dati[this.identificatore].descrizione;

}
}
