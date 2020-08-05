import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/Book/book.service';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.css']
})
export class BooksViewComponent implements OnInit {

  constructor(private bookService: BookService) {

  }


  /**
   * Ask the Service to change all books status
   * @param newStatus
   */
  onClickSwitchAllBooksStatus(newStatus: string): void {
    this.bookService.switchAllBooksStatus(newStatus);
  }

  ngOnInit(): void {
  }

}
