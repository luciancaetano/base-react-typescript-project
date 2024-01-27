import { render } from '@testing-library/react';

import AuthProvider from '@components/providers/auth-provider';

import ProtectedPage from './index';

const wrapper = ({ children }: React.PropsWithChildren<object>) => (
    <AuthProvider>
        {children}
    </AuthProvider>
);

describe('ProtectedPage Component', () => {
    it('should render', () => {
        const { container } = render(
            <ProtectedPage />,
            { wrapper },
        );
        expect(container).toBeTruthy();
    });

    it('should render with children', () => {
        const { getByText } = render(
            (
                <ProtectedPage>
                    <div>Test</div>
                </ProtectedPage>
            ),
            { wrapper },
        );

        expect(getByText('Test')).toBeInTheDocument();
    });

    it('should render with children and className', () => {
        const { container } = render(<ProtectedPage className="test">Test</ProtectedPage>, { wrapper });

        expect(container.querySelector('.test')).toBeTruthy();
    });
});