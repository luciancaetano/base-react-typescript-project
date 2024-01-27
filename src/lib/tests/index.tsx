import { render } from '@testing-library/react';
import React from 'react';

import AppProvider from '@components/providers/app-provider';

const wrapper = ({ children }: React.PropsWithChildren<object>) => (
    <AppProvider>
        {children}
    </AppProvider>
);

export const renderTest = (Component: React.ReactElement) => render(Component, { wrapper });