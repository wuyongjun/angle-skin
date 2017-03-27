import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  template: require('./invoice.component.html'),
  styles: [require('./invoice.component.scss')]
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
