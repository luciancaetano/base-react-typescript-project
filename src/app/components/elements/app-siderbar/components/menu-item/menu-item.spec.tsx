import MenuItem from './index';
import { render } from '@lib/tests';

describe('MenuItem Component', () => {
  it('should render', () => {
    const { container } = render(
      <MenuItem/>);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<MenuItem>
      <div>Test</div>
    </MenuItem>);

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with children and className', () => {
    const { container } = render(<MenuItem className="test">Test</MenuItem>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
