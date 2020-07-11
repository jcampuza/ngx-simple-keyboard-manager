import { fireEvent, render, screen, waitFor } from '@testing-library/angular';
import * as KeyCodes from '@angular/cdk/keycodes';
import { KeyboardListDirective } from './keyboard-list.directive';
import { KeyboardListItemDirective } from './keyboard-list-item.directive';

describe('KeyboardListDirective', () => {
  it('should render correctly', async () => {
    await render(KeyboardListDirective, {
      template: `
        <div keyboard-list data-testid="test"></div>
      `,
    });

    const directive = screen.getByTestId('test');

    expect(directive.getAttribute('role')).toEqual('list');
    expect(directive.getAttribute('tabindex')).toEqual('0');
  });

  it('should navigate the list items contained within on keyboard navigation', async () => {
    const comp = await render(KeyboardListDirective, {
      template: `
        <div keyboard-list data-testid="test">
          <div keyboard-list-item data-testid="test-item"></div>
          <div keyboard-list-item data-testid="test-item"></div>
          <div keyboard-list-item data-testid="test-item"></div>
        </div>
      `,
      declarations: [KeyboardListItemDirective],
    });

    const list = screen.getByTestId('test');
    const listItems = screen.getAllByTestId('test-item');

    // The fire event api does not work with focus
    // due to JSDOM limitations, so focus has to be manually called.
    list.focus();

    fireEvent.keyDown(list, {
      key: KeyCodes.DOWN_ARROW,
      code: KeyCodes.DOWN_ARROW,
      keyCode: KeyCodes.DOWN_ARROW,
    });

    expect(document.activeElement).toBe(listItems[0]);
  });

  it('should navigate the list items contained within on keyboard navigation when horizontal is enabled', async () => {
    const comp = await render(KeyboardListDirective, {
      template: `
        <div keyboard-list [horizontal]="true" data-testid="test">
          <div keyboard-list-item data-testid="test-item"></div>
          <div keyboard-list-item data-testid="test-item"></div>
          <div keyboard-list-item data-testid="test-item"></div>
        </div>
      `,
      declarations: [KeyboardListItemDirective],
    });

    const list = screen.getByTestId('test');
    const listItems = screen.getAllByTestId('test-item');

    // The fire event api does not work with focus
    // due to JSDOM limitations, so focus has to be manually called.
    list.focus();

    fireEvent.keyDown(list, {
      key: KeyCodes.RIGHT_ARROW,
      code: KeyCodes.RIGHT_ARROW,
      keyCode: KeyCodes.RIGHT_ARROW,
    });

    expect(document.activeElement).toBe(listItems[0]);
  });
});
