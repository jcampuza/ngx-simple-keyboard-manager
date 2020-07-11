import { FocusableOption } from '@angular/cdk/a11y';
import { Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({ selector: '[keyboard-list-item]' })
export class KeyboardListItemDirective implements FocusableOption {
  constructor(public element: ElementRef) {}

  @HostBinding('attr.role')
  get role() {
    return 'list-item';
  }

  @HostBinding('tabindex')
  get tabIndex() {
    return '-1';
  }

  focus() {
    this.element.nativeElement.focus();
  }
}
