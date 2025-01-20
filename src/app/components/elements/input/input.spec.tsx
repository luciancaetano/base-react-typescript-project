import { render } from '@lib/tests';
import Input from './index';

describe('Input Component', () => {
it('should render', () => {
const { container } = render(
<Input />);
expect(container).toBeTruthy();
});

it('should render with children', () => {
const { getByText } = render(<Input>
    <div>Test</div>
</Input>);

expect(getByText('Test')).toBeTruthy();
});

it('should render with children and className', () => {
const { container } = render(<Input className="test">Test</Input>);

expect(container.querySelector('.test')).toBeTruthy();
});
});