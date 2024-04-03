import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LuoghiComponent } from './luoghi/luoghi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LuoghiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ripasso';
}
