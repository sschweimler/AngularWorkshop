import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookRoutingModule } from './book-routing.module';
import { BookDataService } from './shared/book-data.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book/book.component';
import { ConfirmCandeactivateGuard } from './shared/confirm-candeactivate.guard';

@NgModule({
  declarations: [BookComponent, BookListComponent, BookDetailComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ],
  providers: [BookDataService, ConfirmCandeactivateGuard]
})
export class BookModule { }
