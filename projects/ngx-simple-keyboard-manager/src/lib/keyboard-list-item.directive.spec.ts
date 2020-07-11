import { KeyboardListItemDirective } from './keyboard-list-item.directive';
import { render, screen, fireEvent } from '@testing-library/angular';

describe('KeyboardListItemDirective', () => {
  it('should render', async () => {
    await render(KeyboardListItemDirective, {
      template: '<div keyboard-list-item data-testid="test">Stuff</div>',
    });

    const directive = screen.getByTestId('test');

    expect(directive.getAttribute('tabindex')).toEqual('-1');
    expect(directive.getAttribute('role')).toEqual('list-item');
  });
});
