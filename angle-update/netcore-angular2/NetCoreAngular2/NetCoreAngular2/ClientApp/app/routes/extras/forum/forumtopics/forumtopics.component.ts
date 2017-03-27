import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-forumtopics',
    template: require('./forumtopics.component.html'),
    styles: [require('./forumtopics.component.scss')]
})
export class ForumtopicsComponent implements OnInit, OnDestroy {

    catid: number;
    private sub: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.catid = +params['catid']; // (+) converts string param to a number
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
