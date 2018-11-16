import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {
  @Input() title: string;
  isHidden = true;
  constructor() { }

  ngOnInit() {
  }
  changeHidden() {
    this.isHidden = !this.isHidden;
  }
}
