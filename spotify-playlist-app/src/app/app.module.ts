import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { ListComponent } from './songlist/songlist.component'
import { SearchSongComponent } from './searchsong/searchsong.component'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import {UserService} from './users/user.service';
import { UsersComponent } from './users/users.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SearchSongService} from './searchsong/searchsong.service'
import {SongListService} from './songlist/songlist.service'

const routes: Routes =[
  {path:'searchsong', component:SearchSongComponent},
  {path:'songlist', component:ListComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    SearchSongComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService,SearchSongService,SongListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
