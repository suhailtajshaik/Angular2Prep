import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[phoneFormat]'
})
export class PhoneFormatDirective {

  constructor(private el:ElementRef) { }

  @HostListener('keyup') changePhoneFormat(){
    let value:string = this.el.nativeElement.value;
    if(value.length == 10)
      this.el.nativeElement.value = value.replace(value, "("+ value.slice(0,3) + ")" + value.slice(3,6) + "-" + value.slice(6,10));
  }
}
