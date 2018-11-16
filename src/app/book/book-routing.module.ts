import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { ConfirmCandeactivateGuard } from './shared/confirm-candeactivate.guard';

const routes: Routes = [{ path: '', component: BookComponent, children: [{ path: ':isbn', component: BookDetailComponent, canDeactivate: [ConfirmCandeactivateGuard]  }, { path: '', component: BookListComponent}]}];
export const routing = RouterModule.forChild(routes);
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
