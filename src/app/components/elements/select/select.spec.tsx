import Select from './index';
import { render } from '@lib/tests';

describe('Select Component', () => {
  it('should render', () => {
    const { container } = render(
      <Select/>);
    expect(container).toBeTruthy();
  });

  it('should render with children', () => {
    const { getByText } = render(<Select>
      <div>Test</div>
    </Select>);

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should render with children and className', () => {
    const { container } = render(<Select className="test">Test</Select>);

    expect(container.querySelector('.test')).toBeTruthy();
  });
});
