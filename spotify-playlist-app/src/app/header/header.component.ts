import { Component,Input } from '@angular/core';
import {HeaderService} from './header.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent {
  title = 'APP-Spotify';
  @Input() data:string ;
  
}
