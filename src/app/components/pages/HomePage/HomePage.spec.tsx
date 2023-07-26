import { render, fireEvent } from '@testing-library/react';
import HomePage from './HomePage';

describe('HomePage Component', () => {
  it('should render', () => {
    const { container } = render(<HomePage />);
    expect(container).toBeTruthy();
  });
  it('should render with className', () => {
    const { container } = render(<HomePage className="test">Test</HomePage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });

  it('should increment count', () => {
    const { getByTestId } = render(<HomePage />);
    const incrementButton = getByTestId('inc');
    const count = getByTestId('counter');

    expect(count.textContent).toBe('0');
    fireEvent.click(incrementButton);
    expect(count.textContent).toBe('1');
  });

  it('should decrement count', () => {
    const { getByTestId } = render(<HomePage />);
    const decrementButton = getByTestId('dec');
    const count = getByTestId('counter');

    expect(count.textContent).toBe('0');
    fireEvent.click(decrementButton);
    expect(count.textContent).toBe('-1');
  });
});
