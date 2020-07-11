import { render, screen } from '@testing-library/angular';
import { KeyboardListItemDirective } from './keyboard-list-item.directive';

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
