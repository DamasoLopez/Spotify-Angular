import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService{

  constructor(private http: HttpClient){}
  redirecturl;
  getLogin(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/login')
  }
  postLogin(tokken:string): Observable<any>{
    return this.http.post<any>('http://localhost:8080/api/loginSuccesfull',tokken)
  }
}
