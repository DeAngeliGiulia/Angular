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
pittore:any;
nome1: any;
nome2: any;
nome3: any;

anno1: any;
anno2: any;
anno3: any;

immagine1: any;
immagine2: any;
immagine3: any;

descrizione1: any;
descrizione2: any;
descrizione3: any;

constructor(private route: ActivatedRoute, public provaService: DettagliServizioService){

}
ngOnInit(){
  this.identificatore = this.route.snapshot.paramMap.get('id');
  this.pittore = this.provaService.dati[this.identificatore].pittore;

  this.nome1 = this.provaService.dati[this.identificatore].nome1;
  this.nome2 = this.provaService.dati[this.identificatore].nome2;
  this.nome3 = this.provaService.dati[this.identificatore].nome3;

  this.anno1 = this.provaService.dati[this.identificatore].anno1;
  this.anno2 = this.provaService.dati[this.identificatore].anno2;
  this.anno3 = this.provaService.dati[this.identificatore].anno3;

  this.immagine1 = this.provaService.dati[this.identificatore].immagine1;
  this.immagine2 = this.provaService.dati[this.identificatore].immagine2;
  this.immagine3 = this.provaService.dati[this.identificatore].immagine3;

  this.descrizione1 = this.provaService.dati[this.identificatore].descrizione1;
  this.descrizione2 = this.provaService.dati[this.identificatore].descrizione2;
  this.descrizione3 = this.provaService.dati[this.identificatore].descrizione3;


}
}
