import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { ListComponent } from './list/list.component';
import { PoemComponent } from './poem/poem.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent, HighlightSearch } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    ListComponent,
    PoemComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    SearchComponent,
    HighlightSearch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
