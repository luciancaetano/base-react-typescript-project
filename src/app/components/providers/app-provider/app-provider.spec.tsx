import AppProvider from './index';
import { render } from '@testing-library/react';

describe('AppProvider Component', () => {
    it('should render', () => {
        const { container } = render(<AppProvider />);
        expect(container).toBeTruthy();
    });

    it('should render children', () => {
        const { getByText } = render(
            <AppProvider>
                <div>Test Child</div>
            </AppProvider>,
        );
        expect(getByText('Test Child')).toBeInTheDocument();
    });
});