import ProtectedPage from './index';
import { render } from '@lib/tests';

describe('ProtectedPage Component', () => {
  it('should render', () => {
    const { container } = render(
      <ProtectedPage />,
    );
    expect(container).toBeTruthy();
  });

  it('should render with children and className', () => {
    const { container } = render(<ProtectedPage className="test"></ProtectedPage>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});