import { Component,OnInit,Output } from '@angular/core';
import {UserService} from './users/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spotify-playlist-app';

  url;
  userCode;

  constructor(private userService:UserService){
      this.userCode=this.getAllUrlParams(window.location.href);

    if(this.userCode['code']==null  && sessionStorage.length==0){
      this.getLogin();
    }else{
      if(sessionStorage.length==0){
        this.postLogin();

      }

    }
  }

  getLogin(){
    this.userService.getLogin().subscribe(
           result => {
                   this.url=result.url
           }

       );
  }
  postLogin(){
    this.userService.postLogin(this.userCode['code']).subscribe(
           result => {
             if(sessionStorage.getItem('accessToken')!="null" && sessionStorage.getItem('refreshToken')!="null" && sessionStorage.getItem('userId')==null){
                  this.getUser();
              }
           }
       );

  }
  getUser(){
    this.userService.getUser(sessionStorage.getItem('accessToken'), sessionStorage.getItem('refreshToken')).subscribe(
        result => {

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
