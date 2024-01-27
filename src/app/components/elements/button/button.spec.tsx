import { render } from '@testing-library/react';

import Button from './index';

describe('Button Component', () => {
    it('should render', () => {
        const { container } = render(
            <Button />);
        expect(container).toBeTruthy();
    });

    it('should render with children', () => {
        const { getByText } = render(<Button>
            <div>Test</div>
        </Button>);

        expect(getByText('Test')).toBeInTheDocument();
    });

    it('should render with children and className', () => {
        const { container } = render(<Button className="test">Test</Button>);

        expect(container.querySelector('.test')).toBeTruthy();
    });
});