import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
book: Book;

  constructor(private route: ActivatedRoute, private bookData: BookDataService ) {}

  ngOnInit() {
    this.route.params.subscribe((params: {isbn: string}) => {
      this.bookData.getBookByIsbn(params.isbn).subscribe(book => {this.book = book; }); });
  }
save(value) {
  console.log(value);
}
}
