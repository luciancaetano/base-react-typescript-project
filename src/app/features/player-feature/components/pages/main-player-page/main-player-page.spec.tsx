import MainPlayerPage from './main-player-page';
import { render } from '@lib/tests';

describe('MainPlayerPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <MainPlayerPage/>);
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<MainPlayerPage className="test"></MainPlayerPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
