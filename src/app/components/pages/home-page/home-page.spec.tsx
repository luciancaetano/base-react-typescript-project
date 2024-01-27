import { render } from '@testing-library/react';
import React from 'react';

import AuthProvider from '@components/providers/auth-provider';

import HomePage from './index';

const wrapper = ({ children }: React.PropsWithChildren<object>) => (
    <AuthProvider>
        {children}
    </AuthProvider>
);

describe('HomePage Component', () => {
    it('should render', () => {
        const { container } = render(
            <HomePage />,
            { wrapper },
        );
        expect(container).toBeTruthy();
    });

    it('should render with children', () => {
        const { getByText } = render(
            <HomePage>
                <div>Test</div>
            </HomePage>,
            { wrapper },
        );

        expect(getByText('Test')).toBeInTheDocument();
    });

    it('should render with children and className', () => {
        const { container } = render(<HomePage className="test">Test</HomePage>, { wrapper });

        expect(container.querySelector('.test')).toBeTruthy();
    });
});