import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filemanager',
  template: require('./filemanager.component.html'),
  styles: [require('./filemanager.component.scss')]
})
export class FilemanagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
