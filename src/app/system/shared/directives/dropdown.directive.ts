import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({ selector: '[wfmDropdown]' })
export class DropdownDirective {
    @HostBinding('class.open')
    isOpen = false;
    @HostListener('click')
    onclick() {
        this.isOpen = !this.isOpen;
        console.log("click");
    }

    constructor() { }
}
