import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-home',
    template: require('./home.component.html'),
    styles: [require('./home.component.scss')]
})
export class HomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}