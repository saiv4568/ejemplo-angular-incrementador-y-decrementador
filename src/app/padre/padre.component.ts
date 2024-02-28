import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {

  valorContador: number = 0;
  mensajePadre ='ojala gane el real madrids';

  incrementar() {
    this.valorContador++;
  }
  decrementar(){
    this.valorContador--;
  }
   
}
