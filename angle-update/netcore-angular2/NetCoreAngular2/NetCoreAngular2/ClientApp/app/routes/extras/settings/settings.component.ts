import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-settings',
    template: require('./settings.component.html'),
    styles: [require('./settings.component.scss')]
})
export class SettingsComponent implements OnInit {

    settingActive = 1;

    constructor() { }

    ngOnInit() {
    }

}
