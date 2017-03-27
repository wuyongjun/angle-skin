import { Component, OnInit } from '@angular/core';

import { UserblockService } from './userblock.service';

@Component({
    selector: 'app-userblock',
    template: require('./userblock.component.html'),
    styles: [require('./userblock.component.scss')]
})
export class UserblockComponent implements OnInit {
    user: any;
    constructor(private userblockService: UserblockService) {

        this.user = {
            picture: 'assets/img/user/01.jpg'
        };
    }

    ngOnInit() {
    }

    userBlockIsVisible() {
        return this.userblockService.getVisibility();
    }

}
