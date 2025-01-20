import AppSiderbar from './index';
import { render } from '@lib/tests';

describe('AppSiderbar Component', () => {
  it('should render', () => {
    const { container } = render(
      <AppSiderbar/>);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<AppSiderbar>
      <div>Test</div>
    </AppSiderbar>);

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with children and className', () => {
    const { container } = render(<AppSiderbar className="test">Test</AppSiderbar>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
