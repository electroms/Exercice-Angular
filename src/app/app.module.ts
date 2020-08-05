import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BookService} from './services/Book/book.service';
import { TableComponent } from './components/table/table.component';
import { TableLineComponent } from './components/table-line/table-line.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { BooksViewComponent } from './views/books-view/books-view.component';
import {AuthService} from './services/Auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableLineComponent,
    AuthViewComponent,
    BooksViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
