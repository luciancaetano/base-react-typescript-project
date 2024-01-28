import AppProvider from '@components/providers/app-provider';
import { render as testRender } from '@testing-library/react';
import React from 'react';

const wrapper = ({ children }: React.PropsWithChildren<object>) => (
  <AppProvider>
    {children}
  </AppProvider>
);

export const render = (Component: React.ReactElement) => testRender(Component, { wrapper });
