import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: require('./layout.component.html'),
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
