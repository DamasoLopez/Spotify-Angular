import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { ListComponent } from './songlist/songlist.component'
import { SearchSongComponent } from './searchsong/searchsong.component'
import { RouterModule, Routes } from '@angular/router'

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
    SearchSongComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
