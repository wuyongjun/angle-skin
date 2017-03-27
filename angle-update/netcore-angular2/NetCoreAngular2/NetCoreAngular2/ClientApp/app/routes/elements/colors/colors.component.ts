import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  template: require('./colors.component.html'),
  styles: [require('./colors.component.scss')]
})
export class ColorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
