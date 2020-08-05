import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: '[app-table-line]',
  templateUrl: './table-line.component.html',
  styleUrls: ['./table-line.component.css']
})
export class TableLineComponent implements OnInit {

  @Input() bookTitle: string;
  @Input() bookAuthor: string;
  @Input() bookStatus: string;


  constructor() {
  }

  ngOnInit(): void {
  }

}
