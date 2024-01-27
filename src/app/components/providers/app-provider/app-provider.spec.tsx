import { render } from '@testing-library/react';

import AppProvider from './index';

describe('AppProvider Component', () => {
    it('should render', () => {
        const { container } = render(<AppProvider />);
        expect(container).toBeTruthy();
    });
});