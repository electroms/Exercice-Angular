import {Component} from '@angular/core';
import {BookService} from './services/Book/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private bookService: BookService) {

  }


  /**
   * Ask the Service to change all books status
   * @param newStatus
   */
  onClickSwitchAllBooksStatus(newStatus: string): void {
    this.bookService.switchAllBooksStatus(newStatus);
  }
}
