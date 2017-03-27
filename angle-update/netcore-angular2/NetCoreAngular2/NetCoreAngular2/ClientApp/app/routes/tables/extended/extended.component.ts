import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../../shared/colors/colors.service';

@Component({
    selector: 'app-extended',
    template: require('./extended.component.html'),
    styles: [require('./extended.component.scss')]
})
export class ExtendedComponent implements OnInit {

    constructor(private colors: ColorsService) { }

    ngOnInit() {
    }

    colorByName(name) {
        return this.colors.byName(name);
    }

}
