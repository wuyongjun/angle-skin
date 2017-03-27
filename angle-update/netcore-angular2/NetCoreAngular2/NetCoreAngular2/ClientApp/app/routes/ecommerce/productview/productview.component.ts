import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productview',
  template: require('./productview.component.html'),
  styles: [require('./productview.component.scss')]
})
export class ProductviewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
