import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls:['./footer.component.css']
})
export class FooterComponent {
  autor = {nombre:'Dámaso Gonzalo',apellidos:'López González'};
}
