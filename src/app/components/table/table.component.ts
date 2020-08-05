import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/Book/book.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  books: Array<any>;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.books = this.bookService.books;
  }

}
