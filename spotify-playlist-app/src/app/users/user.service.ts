import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService{
  httpu:HttpClient
  constructor(private http: HttpClient){
    this.httpu=http
  }
  redirecturl;
  getLogin(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/login')
  }
  postLogin(tokken:string): Observable<any>{
    this.httpu.get<any>('http://localhost:8080/api/login')
    this.redirecturl='http://localhost:8080/api/loginSuccesfull/'+tokken
    console.log(this.redirecturl);
    return this.http.get<any>(this.redirecturl)
  }
}
