import { Component,NgModule } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {SearchSongService} from './searchsong.service'
@Component({
  selector: 'app-searchsong',
  templateUrl: './searchsong.component.html',
  styleUrls:['./searchsong.component.css']

})
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
],providers: [SearchSongService]
})

export class SearchSongComponent {
  playlist:FormGroup;
  songList:FormGroup;
  listPlayList:string[]=[];
  listSongList:string[]=[];
  constructor(private searchSongService:SearchSongService){
    this.playlist = new FormGroup({
      playlistname:new FormControl('',
        [Validators.required] )
    })
    this.songList = new FormGroup({
      songName:new FormControl('',
        [Validators.required,Validators.minLength(3)]),
      email:new FormControl('',
        [Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])
    })

  }

  savePlayList(){

    this.searchSongService.createPlayList(this.playlist.get('playlistname').value).subscribe(
      result =>{
        this.playlist.reset({
          playlistname:""
        });
      });

  }

  searchSong(){
    this.searchSongService.GetAllPlayList().subscribe(
      result =>{
        let count=0
        for (let i in result) {

          this.listPlayList[count]=result[count]
          
          count+=1;
          }
          console.log(this.listPlayList.length)
          this.searchSongService.searchTrack(this.songList.get('songName').value,this.songList.get('email').value).subscribe(
          result =>{
            count=0;
            for (let i in result) {
              if(result[i]!="" ||result[i]!=null){
                this.listSongList[count]=result[i]
                console.log(this.listSongList[count])

              }
              count+=1;
              }
              console.log(this.listSongList.length)
            this.songList.reset({
            songName:"",
            email:""
          });
          });
      });


  }

}
