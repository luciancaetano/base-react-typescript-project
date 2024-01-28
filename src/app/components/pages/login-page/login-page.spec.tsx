import LoginPage from './index';
import { render } from '@testing-library/react';

describe('LoginPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <LoginPage />);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<LoginPage>
      <div>Test</div>
    </LoginPage>);

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with children and className', () => {
    const { container } = render(<LoginPage className="test">Test</LoginPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});