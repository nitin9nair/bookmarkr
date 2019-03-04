import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Input } from '@angular/compiler/src/core';

@Directive({
  selector: '[togglePassword]'
})
export class TogglePasswordDirective implements AfterViewInit {

  inputElement: ElementRef;


  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

   }

   ngAfterViewInit() {
    this.renderer.setAttribute(this.inputElement.nativeElement, 'type', 'password');
   }
   

}
