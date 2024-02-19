import LoginPage from './login-page';
import { render } from '@lib/tests';

describe('LoginPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <LoginPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<LoginPage className="test"></LoginPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
