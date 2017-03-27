import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  template: require('./articles.component.html'),
  styles: [require('./articles.component.scss')]
})
export class ArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
