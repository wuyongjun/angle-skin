import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  template: require('./products.component.html'),
  styles: [require('./products.component.scss')]
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
