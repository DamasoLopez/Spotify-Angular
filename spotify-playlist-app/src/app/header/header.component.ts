import { Component,Input } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent {
  title = 'APP-Spotify';
  @Input() data:string ;
  login=true;
  constructor(){
    this.loginSuccesfull();
  }
 loginSuccesfull(){
   if(sessionStorage.length>0){
     this.login=false;
   }
 }
 procesarClic(){
   sessionStorage.clear();
   this.login=true;
 }
}
