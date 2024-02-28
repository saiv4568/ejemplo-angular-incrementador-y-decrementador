import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  
    //este es el mensaje que recibe desde padre
    @Input() recibeHijo : string = '';
}
