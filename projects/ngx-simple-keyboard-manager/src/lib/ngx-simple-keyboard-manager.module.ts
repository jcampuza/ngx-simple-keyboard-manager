import { NgModule } from '@angular/core';
import { KeyboardListDirective } from './keyboard-list.directive';
import { KeyboardListItemDirective } from './keyboard-list-item.directive';

@NgModule({
  declarations: [KeyboardListDirective, KeyboardListItemDirective],
  exports: [KeyboardListDirective, KeyboardListItemDirective],
})
export class NgxSimpleKeyboardManagerModule {}
