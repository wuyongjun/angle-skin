import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    template: require('./profile.component.html'),
    styles: [require('./profile.component.scss')]
})
export class ProfileComponent implements OnInit {

    lat: number = 33.790807;
    lng: number = -117.835734;
    zoom: number = 14;
    scrollwheel = false;

    constructor() { }

    ngOnInit() {
    }

}
