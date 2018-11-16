import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';

const routes: Routes = [{ path: 'books', component: BookComponent, children: [{ path: ':isbn', component: BookDetailComponent }, { path: '', component: BookListComponent }]}];
export const routing = RouterModule.forChild(routes);
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
