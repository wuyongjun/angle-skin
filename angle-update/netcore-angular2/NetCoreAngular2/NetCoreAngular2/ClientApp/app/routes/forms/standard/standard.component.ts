import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard',
  template: require('./standard.component.html'),
  styles: [require('./standard.component.scss')]
})
export class StandardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
