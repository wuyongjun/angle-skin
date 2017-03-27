import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  template: require('./orders.component.html'),
  styles: [require('./orders.component.scss')]
})
export class OrdersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
