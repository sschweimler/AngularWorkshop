import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent implements OnInit {
  @Output() titleClicked = new EventEmitter<string>();
  @Output() input = new EventEmitter<any>();
  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }
  onTitleClicked() {
    this.titleClicked.emit('Title clicked');
  }
  onInput(e: any) {
    this.input.emit(e.target.value);
  }
}
