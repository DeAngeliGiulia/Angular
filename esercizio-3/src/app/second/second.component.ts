import { Component } from '@angular/core';
import { ThirdComponent } from '../third/third.component';
import { FourthComponent } from '../fourth/fourth.component';

@Component({
  selector: 'second',
  standalone: true,
  imports: [ThirdComponent, FourthComponent],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  array = [{nome1 : "Gatto piangente", descrizione1 : "Gatto che piange"}, {nome2 : "Gatto Bruh", descrizione2 : "	Gatto scioccato/basito"}]
}
