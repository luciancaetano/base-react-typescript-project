import Loader from './index';
import { render } from '@lib/tests';

describe('Loader Component', () => {
  it('should render', () => {
    const { container } = render(
      <Loader/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<Loader className="test"></Loader>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
