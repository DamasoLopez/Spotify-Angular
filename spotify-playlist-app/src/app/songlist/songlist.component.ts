import { Component,OnInit } from '@angular/core';
import {SongListService} from './songlist.service'
@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls:['./songlist.component.css']
})
export class ListComponent implements OnInit{
  listPlayList:string[]=[];
  constructor(private songListService:SongListService){

  }
  ngOnInit(){
    this.cargarCanciones();

  }
  cargarCanciones(){
    this.songListService.GetAllPlayList().subscribe(
      result =>{
        let count=0

        for (let i in result) {


          this.listPlayList[count]=result[count]

          count+=1;
          }
          console.log(this.listPlayList.length)
      })
  }
}
