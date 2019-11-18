import { Component,OnInit,Output } from '@angular/core';
import {UserService} from './users/user.service'
import {HeaderService} from './header/header.service'
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Bienvenido a spotify-playlist-app';
  url;
  userCode
  constructor(private userService:UserService,private rutaActiva: ActivatedRoute){

  }
  ngOnInit(){
    if(this.rutaActiva.snapshot.params.code==null || this.rutaActiva.snapshot.params.error=="access_denied" ){
      this.getLogin();
    }else{
       this.userCode=this.rutaActiva.snapshot.params.code
    }

      }
  getLogin(){
    this.userService.getLogin().subscribe(
           result => {
                   this.url=result.url
                   console.log(this.url);
           }

       );
  }

}
