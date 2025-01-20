import SignupPage from './signup-page';
import { render } from '@lib/tests';

describe('SignupPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <SignupPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<SignupPage className="test"></SignupPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
