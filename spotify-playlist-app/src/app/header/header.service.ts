import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeaderService{

  constructor(private http: HttpClient){}
  public redirecturl;

}
