import { Directive, OnInit, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appWidthChange]'
})
export class WidthChangeDirective implements OnInit, OnChanges {

  @Input() width: number;

  constructor(private element: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.element.nativeElement.style.width = changes.width.currentValue + '%';
  }

  ngOnInit(): void {
    this.element.nativeElement.style.width = this.width + '%';
  }

}
