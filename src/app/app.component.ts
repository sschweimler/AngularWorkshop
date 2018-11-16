import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-app';
  titleClicked: string;

  onTitleClicked(e: string) {
    if (this.titleClicked === '') {
    this.titleClicked = e;
    } else {
      this.titleClicked = '';
    }
  }
}
