import { Component,OnInit,Output } from '@angular/core';
import {UserService} from './users/user.service'
import {Globals} from './globals'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Bienvenido a spotify-playlist-app';
  globals: Globals;
  url;
  userCode={};
  urlTree;
  constructor(private userService:UserService,globals: Globals){
    this.globals=globals;
      this.userCode=this.getAllUrlParams(window.location.href);
    if(this.userCode['code']==null ){
      this.getLogin();
    }else{

       this.userService.postLogin(this.userCode['code']);
    }
  }
  ngOnInit(){



      }
  getLogin(){
    this.userService.getLogin().subscribe(
           result => {
                   this.url=result.url
                   this.globals.url=result.url;
                   console.log(this.url);
           }

       );
  }
   getAllUrlParams(url) {
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  var obj = {};

  if (queryString) {
    queryString = queryString.split('#')[0];
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      var a = arr[i].split('=');
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

        if (!obj[paramName]) {
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string'){
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          obj[paramName].push(paramValue);
        }

    }
  }

  return obj;
}
}
