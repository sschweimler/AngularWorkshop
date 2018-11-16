import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { BookDataService } from './shared/book-data.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book/book.component';
import { ConfirmCandeactivateGuard } from './shared/confirm-candeactivate.guard';
import { BookEditComponent } from './book-edit/book-edit.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [BookComponent, BookListComponent, BookDetailComponent, BookEditComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule
  ],
  providers: [BookDataService, ConfirmCandeactivateGuard]
})
export class BookModule { }
