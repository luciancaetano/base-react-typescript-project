import { render } from '@testing-library/react';

import HomePage from './index';

describe('HomePage Component', () => {
    it('should render', () => {
        const { container } = render(
            <HomePage />);
        expect(container).toBeTruthy();
    });

    it('should render with children', () => {
        const { getByText } = render(<HomePage>
            <div>Test</div>
        </HomePage>);

        expect(getByText('Test')).toBeInTheDocument();
    });

    it('should render with children and className', () => {
        const { container } = render(<HomePage className="test">Test</HomePage>);

        expect(container.querySelector('.test')).toBeTruthy();
    });
});