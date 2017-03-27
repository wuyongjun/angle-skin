import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contacts',
    template: require('./contacts.component.html'),
    styles: [require('./contacts.component.scss')]
})
export class ContactsComponent implements OnInit {

    favContact1 = false;
    favContact2 = true;
    favContact3 = false;
    favContact4 = false;
    favContact5 = true;
    favContact6 = true;
    favContact7 = false;
    favContact8 = false;
    favContact9 = false;

    constructor() { }

    ngOnInit() {
    }

}
