import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthViewComponent} from './views/auth-view/auth-view.component';
import {BooksViewComponent} from './views/books-view/books-view.component';

const routes: Routes = [
  { path : 'auth', component: AuthViewComponent},
  { path : '', component: BooksViewComponent},
  { path : 'books', component: BooksViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
