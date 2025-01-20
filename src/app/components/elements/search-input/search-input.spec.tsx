import { render } from '@lib/tests';
import SearchInput from './index';

describe('SearchInput Component', () => {
it('should render', () => {
const { container } = render(
<SearchInput />);
expect(container).toBeTruthy();
});

it('should render with children', () => {
const { getByText } = render(<SearchInput>
    <div>Test</div>
</SearchInput>);

expect(getByText('Test')).toBeTruthy();
});

it('should render with children and className', () => {
const { container } = render(<SearchInput className="test">Test</SearchInput>);

expect(container.querySelector('.test')).toBeTruthy();
});
});