import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  template: require('./grid.component.html'),
  styles: [require('./grid.component.scss')]
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
