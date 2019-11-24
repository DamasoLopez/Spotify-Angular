import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'

@Injectable()
export class SongListService{
  constructor(private http: HttpClient){

  }
  GetAllPlayList(): Observable<any>{

    return this.http.get<any>('http://localhost:8080/api/playlist/getAllPlaylist/'+sessionStorage.getItem('accessToken')+'/'+sessionStorage.getItem('refreshToken'))
  }
}
