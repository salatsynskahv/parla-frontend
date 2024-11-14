import {Directive, ElementRef, HostListener} from '@angular/core';
import e from "express";

@Directive({
  selector: '[decimalValidator]',
  standalone: true
})
export class DecimalValidatorDirective {

  constructor(private elementRef: ElementRef) {
    const nativeElement = elementRef.nativeElement;
    console.log(nativeElement.value);
  }

  @HostListener('click', ['$event.target'])
  onClick(event: MouseEvent): void {
    console.log('click');
    console.log(this.elementRef.nativeElement.value);
    console.log(event);
  }

  @HostListener('keyup', ['$event'])
  onKeyup(event: KeyboardEvent): void {
    console.log('keyup');
    console.log(this.elementRef.nativeElement.value);
    console.log(event);
    const value: string = this.elementRef.nativeElement.value;
    if (event.code.includes('Digit')) {
      this.elementRef.nativeElement.value = value.slice(0, value.length - 1);
    } else {
      this.elementRef.nativeElement.value = value.toUpperCase();
    }
  }


}
