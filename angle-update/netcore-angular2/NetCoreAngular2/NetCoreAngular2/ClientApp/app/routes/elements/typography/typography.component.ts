import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  template: require('./typography.component.html'),
  styles: [require('./typography.component.scss')]
})
export class TypographyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
