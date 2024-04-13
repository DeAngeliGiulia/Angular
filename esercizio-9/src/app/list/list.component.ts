import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'list',
  standalone: true,
  imports: [MatCardModule,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

   pianeti= [
    {nome:'Gliese 876 d', sistema:'Orbita attorno alla nana rossa Gliese 876', distanza:'15 anni luce', massa:'>5.88 M⊕(massa terrestre)', partenza:'Edwards Air Force Base', dPart: new Date(2026, 9, 15), dArr: new Date(3038, 5, 7), costo:'12500000', immagine:'./assets/Gliese_876_d.jpg' },
    {nome:'OGLE-2005-BLG-390L b', sistema:'Orbita attorno alla stella OGLE-2005-BLG-390L', distanza:'21500 anni luce', massa:'0,017 MJ(massa gioviana)', partenza:'Spazioporto di Mojave', dPart: new Date(2028, 6, 19), dArr: new Date(67932, 2, 26), costo:'75500000', immagine:'./assets/OGLE-2005-BLG-390L b.jpg' },
    {nome:'MOA-2007-BLG-192Lb', sistema:'Orbita intorno alla stella MOA-2007-BLG-192L', distanza:'3000 anni luce', massa:'3.3+4.9 − 1.6 M⊕(massa terrestre)', partenza:'Cape Canaveral Air Force Station', dPart: new Date(2025, 11, 28), dArr: new Date(35476, 5, 30), costo:'53750000', immagine:'./assets/MOA-2007-BLG-192Lb.jpg' },
    {nome:'CoRoT-Exo-7 b', sistema:'Orbita intorno alla stella CoRoT-7', distanza:'489 anni luce', massa:'6,056 ± 0,65 M⊕(massa terrestre)', partenza:'Centro spaziale di Jiuquan', dPart: new Date(2032, 4, 24), dArr: new Date(8072, 9, 15), costo:'2580000', immagine:'./assets/CoRoT-Exo-7 b.jpg    ' },
    {nome:'Kepler-406 b', sistema:' Orbita attorno a Kepler-406', distanza:'1400 anni luce', massa:'6,35 M⊕(massa terrestre)', partenza:'Cosmodromo di Bajkonur', dPart: new Date(2030, 7, 27), dArr: new Date(12530, 9, 15), costo:'37900000', immagine:'./assets/Kepler-406 b.jpg' },
    ]
}
