import AppHeader from './index';
import { render } from '@lib/tests';

describe('AppHeader Component', () => {
  it('should render', () => {
    const { container } = render(
      <AppHeader/>);
    expect(container).toBeTruthy();
  });
  it('should render with children and className', () => {
    const { container } = render(<AppHeader className="test"></AppHeader>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
