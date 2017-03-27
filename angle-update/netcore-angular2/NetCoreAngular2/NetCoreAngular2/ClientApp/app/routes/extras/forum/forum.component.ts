import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forum',
  template: require('./forum.component.html'),
  styles: [require('./forum.component.scss')]
})
export class ForumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
