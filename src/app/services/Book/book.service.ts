import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Array<any>;

  constructor() {
    this.books = [];

    for (let i = 0; i < 10; i++) {
      this.books.push({
        title: 'Title ' + i,
        author: 'Author ' + i,
        status: 'dispo '
      });
    }

  }

  /**
   * Method for quickly switch all book status
   * @param newStatus
   */
  switchAllBooksStatus(newStatus: string): void {
    this.books.forEach(book => book.status = newStatus);
  }

}
