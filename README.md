# NgxSimpleKeyboardManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Installation

Add module to `app.module.ts` or to for lazy loaded modules to whichever modules you would like this to be available in.

```ts
import { NgxSimpleKeyboardManagerModule } from 'ngx-simple-keyboard-manager';

@NgModule({
  imports: [NgxSimpleKeyboardManagerModule]
});
```

## Usage

Add the `keyboard-list` directive to any element that you would like to be keyboard navigable. Add `keyboard-list-item` to the list items that can be focused within this list. For styling you can add a `:focus` pseudoclass to the element.

```html
<div keyboard-list>
  <div keyboard-list-item>1</div>
  <div keyboard-list-item>2</div>
  <div keyboard-list-item>3</div>
</div>
```

`keyboard-list` will become focusable, and the marked items will be navigable.

## Configuration

### Inputs

- horizontal - `boolean; default: false` -> Adds horizontal keyboard navigation functionality
