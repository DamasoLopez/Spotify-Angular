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
import { Globals } from './globals';

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
    RouterModule.forRoot(routes)
  ],
  providers: [UserService,Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
