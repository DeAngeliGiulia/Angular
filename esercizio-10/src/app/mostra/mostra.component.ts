import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostra',
  standalone: true,
  imports: [],
  templateUrl: './mostra.component.html',
  styleUrl: './mostra.component.css'
})
export class MostraComponent {
  identificatore: any;

  constructor(private route: ActivatedRoute){
  }
  ngOnInit(){
    this.identificatore = this.route.snapshot.paramMap.get('x');
  }
}
