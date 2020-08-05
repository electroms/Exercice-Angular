import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {BookService} from '../../services/Book/book.service';

@Component({
  selector: '[app-table-line]',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.css']
})
export class TableLineComponent implements OnInit, OnChanges {

  @Input() bookId: string;
  @Input() bookTitle: string;
  @Input() bookAuthor: string;
  @Input() bookStatus: string;

  nextStatus: string;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.nextStatus = this.bookStatus === 'dispo' ? 'non dispo' : 'dispo';
  }

  onClickSwichBookStatus(): void {
    /*for quickly cast string to number just use '+'
    character before var to cast*/
    this.bookService.switchBookStatus(+this.bookId, this.nextStatus);


  }

}
