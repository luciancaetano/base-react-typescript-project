import AppHeaderContent from './index';
import { render } from '@lib/tests';

describe('AppHeaderContent Component', () => {
  it('should render', () => {
    const { container } = render(
      <AppHeaderContent/>);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<AppHeaderContent>
      <div>Test</div>
    </AppHeaderContent>);

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with children and className', () => {
    const { container } = render(<AppHeaderContent className="test">Test</AppHeaderContent>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
