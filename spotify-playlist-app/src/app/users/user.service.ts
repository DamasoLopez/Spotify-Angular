import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
@Injectable()
export class UserService{

  constructor(private http: HttpClient){

  }

  getLogin(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/user/login')
  }
  postLogin(token:string): Observable<any>{

    return this.http.get<any>('http://localhost:8080/api/user/loginSuccesfull/'+token).pipe(
      map(response=>{
        sessionStorage.removeItem
        sessionStorage.removeItem('accessToken')
        sessionStorage.removeItem('refreshToken')
        sessionStorage.setItem('accessToken',response['access_token'])
        sessionStorage.setItem('refreshToken',response['refresh_token'])
        return response;

      })
    )
  }
  getUser(token:string,refreshToken:string): Observable<any>{

    return this.http.get<any>('http://localhost:8080/api/user/getUserId/'+token+'/'+refreshToken).pipe(
      map(response=>{
        sessionStorage.setItem('userId',response['userId'])
        return response;

      })
    )
  }
}
