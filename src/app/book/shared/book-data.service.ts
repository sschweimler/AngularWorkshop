import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';
import { from as observableFrom } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookDataService {
  books: Book[];
  constructor(private http: HttpClient) { }
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:4730/books');
  }
  getBookByIsbn(isbn: string): Observable<Book> {
    return this.http.get<Book>(`http://localhost:4730/books/${isbn}`);
  }
  getBookCover(isbn: string): Observable<any> {

    return this.http.get<any>('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn);
  }
}
