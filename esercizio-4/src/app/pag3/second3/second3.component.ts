import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  titolo: string;
  posizione: number;
  uscita: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {posizione: 1, titolo: 'Change My Clothes', uscita: "", symbol: 'H'},
  {posizione: 2, titolo: 'Water Fountain', uscita: "", symbol: 'He'},
  {posizione: 3, titolo: 'If We Have Each Other', uscita: "", symbol: 'Li'},
  {posizione: 4, titolo: 'Let Me Down Slowly', uscita: "", symbol: 'Be'},
  {posizione: 5, titolo: 'Jesus In LA', uscita: "", symbol: 'B'},
  {posizione: 6, titolo: 'End Of The Summer', uscita: "", symbol: 'C'},
  {posizione: 7, titolo: 'Paper Crown', uscita: "", symbol: 'N'},
  {posizione: 8, titolo: 'Must Have Been The Wind', uscita: "", symbol: 'O'},
  {posizione: 9, titolo: 'Fluorine', uscita: "", symbol: 'F'},
  {posizione: 10, titolo: 'Neon', uscita: "", symbol: 'Ne'},
];

@Component({
  selector: 'second3',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './second3.component.html',
  styleUrl: './second3.component.css'
})
export class Second3Component {

}
