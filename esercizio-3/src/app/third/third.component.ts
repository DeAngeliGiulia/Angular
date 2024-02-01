import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'third',
  templateUrl: 'third.component.html',
  standalone: true,
  imports: [MatProgressBarModule, MatButtonModule],
})
export class ThirdComponent {
likes : number = 0;

constructor(){
  this.likes = Math.floor(Math.random() * 100);
  this.colorChanger();
}
  clickBottone(){
    if(this.likes < 100){
    this.likes = this.likes +1;
    }
  }
  colorChanger() : string{
    if(this.likes < 33){
      return "primary";
    }
    else if(this.likes >= 33 && this.likes < 66){
      return "accent";
    }
    else{
      return "warn";
    }
  }
}
