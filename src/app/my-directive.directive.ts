import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective {
  constructor(elr: ElementRef) {
    elr.nativeElement.style.background = 'red';
  }
}
