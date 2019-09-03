import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from '../books/books.component';
import { ListComponent } from '../list/list.component';
import { PoemComponent } from '../poem/poem.component';
import { AboutComponent } from '../about/about.component';
import { SearchComponent } from '../search/search.component';

const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: BooksComponent},
  {path: 'list/:id', component: ListComponent},
  {path: 'poems/:poemid', component: PoemComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search', component: SearchComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
