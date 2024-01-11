import { Component } from '@angular/core';
import { ThirdComponent } from '../third/third.component';
import { FourthComponent } from '../fourth/fourth.component';

@Component({
  selector: 'second-component',
  standalone: true,
  imports: [ThirdComponent, FourthComponent],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {

}
