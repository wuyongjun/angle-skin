import { OnInit, Directive, Input, ElementRef } from '@angular/core';
var $ = require('jquery');

@Directive({
    selector: 'scrollable'
})
export class ScrollableDirective implements OnInit {

    @Input() height: number;
    defaultHeight = 250;

    constructor(private element: ElementRef) { }

    ngOnInit() {
        $(this.element.nativeElement).slimScroll({
            height: (this.height || this.defaultHeight)
        });
    }

}
