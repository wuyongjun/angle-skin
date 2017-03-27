import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChange, ElementRef } from '@angular/core';
var $ = require('jquery');

@Component({
    selector: 'app-navsearch',
    template: require('./navsearch.component.html'),
    styles: [require('./navsearch.component.scss')]
})
export class NavsearchComponent implements OnInit, OnChanges {

    @Input() visible: boolean;
    @Output() onclose = new EventEmitter<boolean>();
    term: string;

    constructor(private elem: ElementRef) { }

    ngOnInit() {
        $(document)
            .on('keyup', event => {
                if (event.keyCode === 27) {// ESC
                    this.closeNavSearch();
                }
            })
            .on('click', event => {
                if (!$.contains(this.elem.nativeElement, event.target)) {
                    this.closeNavSearch();
                }
            })
            ;
    }

    closeNavSearch() {
        this.visible = false;
        this.onclose.emit();
    }

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        // console.log(changes['visible'].currentValue)
        if (changes['visible'].currentValue === true) {
            this.elem.nativeElement.querySelector('input').focus();
        }
    }

    handleForm() {
        console.log('Form submit: ' + this.term);
    }
}