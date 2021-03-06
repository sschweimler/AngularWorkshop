import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { BookListComponent } from '../book-list/book-list.component';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmCandeactivateGuard implements CanActivate, CanDeactivate<BookDetailComponent> {

  // tslint:disable-next-line:no-unused-expression
  canDeactivate() {
    return confirm('Are you sure?');
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}
