import { Component, OnInit, OnDestroy } from '@angular/core';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
// tslint:disable-next-line:semicolon
import { Subscription } from 'rxjs';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  books;
  subscription: Subscription;
  constructor(private bookData: BookDataService) {
  }
  ngOnInit() {
    this.subscription = this.bookData.getBooks().subscribe(books => {this.booksRecieved(books); });
  }
  ngOnDestroy() {
   this.subscription.unsubscribe();
  }
  booksRecieved(data: Book[]) {
    this.books = data;
  }
}
