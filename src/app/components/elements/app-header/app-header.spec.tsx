import AppHeader from './index';
import { render } from '@testing-library/react';

describe('AppHeader Component', () => {
  it('should render', () => {
    const { container } = render(
      <AppHeader />);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<AppHeader>
      <div>Test</div>
    </AppHeader>);

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with children and className', () => {
    const { container } = render(<AppHeader className="test">Test</AppHeader>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});