import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  HostListener,
} from "@angular/core";

@Directive({
  selector: "[appClickOutside]",
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<Event>();

  constructor(private elementRef: ElementRef) {}

  @HostListener("document:click", ["$event"])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    // Check if the click was outside the ElementRef
    if (!this.elementRef.nativeElement.contains(targetElement)) {
      this.clickOutside.emit(event);
    }
  }
}
