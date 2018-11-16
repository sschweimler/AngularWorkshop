import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Book } from '../shared/book';
import { BookDataService } from '../shared/book-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {

  isbn: string;
  book: Book;
  sub: Subscription;
  constructor(private route: ActivatedRoute, private bookData: BookDataService) { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    // params bekommt hier ein Interface zugewiesen
    this.sub = this.route.params.subscribe((params: {isbn: string}) => {
      this.bookData.getBookByIsbn(params.isbn).subscribe(book => {this.book = book; }); });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
