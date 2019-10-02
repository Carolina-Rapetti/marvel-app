import { Directive, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClickoutside]'
})
export class ClickoutsideDirective {

  @Output() handler = new EventEmitter<void>();
  constructor(private elem:ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(target) {
    const clickedInside = this.elem.nativeElement.contains(target);
    if (!clickedInside) {
      this.handler.emit();
    }
  }

}
