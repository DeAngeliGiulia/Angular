import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

   pianeti= [
    {nome:'Gliese 876 d', sistema:'orbita attorno alla nana rossa Gliese 876', distanza:' anni luce', massa:'>5.88 M⊕(massa terrestre)', partenza:'', dPart:'', dArr:'', costo:'', immagine:'./assets/.png' },
    {nome:'OGLE-2005-BLG-390L b', sistema:'orbita attorno alla stella OGLE-2005-BLG-390L', distanza:'21500 anni luce', massa:'0,017 MJ(massa gioviana)', partenza:'', dPart:'', dArr:'', costo:'', immagine:'./assets/.png' },
    {nome:'MOA-2007-BLG-192Lb', sistema:'orbita intorno alla stella MOA-2007-BLG-192L', distanza:'3000 anni luce', massa:'3.3+4.9 − 1.6 M⊕(massa terrestre)', partenza:'', dPart:'', dArr:'', costo:'', immagine:'./assets/.png' },
    {nome:'CoRoT-Exo-7 b', sistema:'orbita intorno alla stella CoRoT-7', distanza:'489 anni luce', massa:'6,056 ± 0,65 M⊕', partenza:'', dPart:'', dArr:'', costo:'', immagine:'./assets/.png' },
    {nome:'', sistema:'', distanza:' anni luce', massa:'', partenza:'', dPart:'', dArr:'', costo:'', immagine:'./assets/.png' },
    ]
}
