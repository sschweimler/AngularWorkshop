import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const routes: Routes = [{path: 'books',
component: BookListComponent}, {
  path: '',
  pathMatch: 'full',
  redirectTo: '/books'
}, {path: 'mouse',
component: MouseCursorComponent}, {path: 'info',
component: InfoBoxComponent}, { path: 'books/:isbn', component: BookDetailComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
