import { CommonModule } from '@angular/common';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  @Output() paginaEvento = new EventEmitter<string>();

  paginaHome = "home";

  home(){
    this.paginaHome = "home";
    this.paginaEvento.emit(this.paginaHome);
  }

  biglietti(){
    this.paginaHome = "biglietti";
    this.paginaEvento.emit(this.paginaHome);
  }

}
