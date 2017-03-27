import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../core/settings/settings.service';

@Component({
    selector: '[app-footer]',
    template: require('./footer.component.html'),
    styles: [require('./footer.component.scss')]
})
export class FooterComponent implements OnInit {

    constructor(public settings: SettingsService) { }

    ngOnInit() {

    }

}
