import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-timeline',
    template: require('./timeline.component.html'),
    styles: [require('./timeline.component.scss')]
})
export class TimelineComponent implements OnInit {

    timelineAlt = false;

    constructor() { }

    ngOnInit() {
    }

}
