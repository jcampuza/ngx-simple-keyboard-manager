import { FocusKeyManager } from '@angular/cdk/a11y';
import { tap } from 'rxjs/operators';
import {
  AfterViewInit,
  ContentChildren,
  Directive,
  HostBinding,
  HostListener,
  Input,
  QueryList,
} from '@angular/core';
import { KeyboardListItemDirective } from './keyboard-list-item.directive';

@Directive({ selector: '[keyboard-list]' })
export class KeyboardListDirective implements AfterViewInit {
  @ContentChildren(KeyboardListItemDirective) items: QueryList<KeyboardListItemDirective>;

  @HostBinding('attr.role')
  get role() {
    return 'list';
  }

  @HostBinding('tabindex')
  get tabindex() {
    return '0';
  }

  @Input('horizontal') horizontal = false;

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    this.focusManager.onKeydown(event);
  }

  focusManager: FocusKeyManager<KeyboardListItemDirective>;

  ngAfterViewInit() {
    this.focusManager = new FocusKeyManager(this.items).withWrap();

    if (this.horizontal) {
      this.focusManager.withHorizontalOrientation('ltr');
    }
  }
}
