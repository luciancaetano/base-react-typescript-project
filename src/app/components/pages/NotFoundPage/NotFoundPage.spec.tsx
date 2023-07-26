import { render } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('NotFoundPage Component', () => {
  it('should render', () => {
    const { container } = render(<NotFoundPage />);
    expect(container).toBeTruthy();
  });

  it('should render with className', () => {
    const { container } = render(<NotFoundPage className="test" />);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
