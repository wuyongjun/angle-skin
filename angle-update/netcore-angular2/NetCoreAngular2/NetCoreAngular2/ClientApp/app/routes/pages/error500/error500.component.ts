import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../core/settings/settings.service';

@Component({
  selector: 'app-error500',
  template: require('./error500.component.html'),
  styles: [require('./error500.component.scss')]
})
export class Error500Component implements OnInit {

  constructor(public settings: SettingsService) { }

  ngOnInit() {
  }

}
