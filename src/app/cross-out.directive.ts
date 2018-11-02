import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCrossOut]'
})
export class CrossOutDirective implements OnInit {

  @Input() isComplete: boolean;

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    if (this.isComplete) {
      this.element.nativeElement.style.textDecoration = 'line-through';
    }

  }

}
