import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'
@Injectable()
export class SearchSongService{

  constructor(private http: HttpClient){

  }
  httpParams

  createPlayList(playListName:string): Observable<any>{
   this.httpParams = { 'playListName': playListName ,
    access_token: sessionStorage.getItem('accessToken'),refresh_token: sessionStorage.getItem('refreshToken'),userId:sessionStorage.getItem('userId') };
    return this.http.post<any>('http://localhost:8080/api/playlist/createPlayList/',this.httpParams,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'

      })
    })
  }
  GetAllPlayList(): Observable<any>{

    return this.http.get<any>('http://localhost:8080/api/playlist/getAllPlaylist/'+sessionStorage.getItem('accessToken')+'/'+sessionStorage.getItem('refreshToken'))
  }

  searchTrack(nameSong:string,email:string): Observable<any>{

     return this.http.get<any>('http://localhost:8080/api/playlist/searchTrack/'+sessionStorage.getItem('accessToken')+'/'+sessionStorage.getItem('refreshToken')+'/'+nameSong+'/'+email);
  }
}
