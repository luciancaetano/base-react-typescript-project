/* eslint-disable node/no-unpublished-import */
/* eslint-disable import/no-extraneous-dependencies */
import { render, fireEvent } from '@testing-library/react';
import HomeView from './HomeView';

describe('HomeView Component', () => {
  it('should render', () => {
    const { container } = render(<HomeView />);
    expect(container).toBeTruthy();
  });
  it('should render with className', () => {
    const { container } = render(<HomeView className="test">Test</HomeView>);

    expect(container.querySelector('.test')).toBeTruthy();
  });

  it('should increment count', () => {
    const { getByTestId } = render(<HomeView />);
    const incrementButton = getByTestId('inc');
    const count = getByTestId('counter');

    expect(count.textContent).toBe('0');
    fireEvent.click(incrementButton);
    expect(count.textContent).toBe('1');
  });

  it('should decrement count', () => {
    const { getByTestId } = render(<HomeView />);
    const decrementButton = getByTestId('dec');
    const count = getByTestId('counter');

    expect(count.textContent).toBe('0');
    fireEvent.click(decrementButton);
    expect(count.textContent).toBe('-1');
  });
});
