import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-forumdiscussion',
    template: require('./forumdiscussion.component.html'),
    styles: [require('./forumdiscussion.component.scss')]
})
export class ForumdiscussionComponent implements OnInit {

    answerCollapsed = false;
    topid: number;
    private sub: any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.topid = +params['topid']; // (+) converts string param to a number
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
