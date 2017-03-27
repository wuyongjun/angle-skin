import { Component, OnInit } from '@angular/core';

import { ColorsService } from '../../../shared/colors/colors.service';

@Component({
    selector: 'app-bugtracker',
    template: require('./bugtracker.component.html'),
    styles: [require('./bugtracker.component.scss')]
})
export class BugtrackerComponent implements OnInit {

    sparkOptionsInfo = {
        type: 'pie',
        sliceColors: [this.colors.byName('gray-lighter'), this.colors.byName('info')],
        height: 50
    };

    sparkOptionsWarning = {
        type: 'pie',
        sliceColors: [this.colors.byName('gray-lighter'), this.colors.byName('warning')],
        height: 50
    };

    sparkOptionsSuccess = {
        type: 'pie',
        sliceColors: [this.colors.byName('gray-lighter'), this.colors.byName('success')],
        height: 50
    };

    sparkOptionsDanger = {
        type: 'pie',
        sliceColors: [this.colors.byName('gray-lighter'), this.colors.byName('danger')],
        height: 50
    };

    constructor(private colors: ColorsService) { }

    ngOnInit() {
    }

}