import AppProvider from '@components/providers/app-provider';
import { render as testRender } from '@testing-library/react';
import { renderHook as testRenderHook, act } from '@testing-library/react-hooks';
import React from 'react';

const wrapper = ({ children }: React.PropsWithChildren<object>) => (
  <AppProvider>
    {children}
  </AppProvider>
);

export const render = (Component: React.ReactElement) => testRender(Component, { wrapper });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const renderHook: typeof testRenderHook = (callback, options) => testRenderHook(callback, { ...options, wrapper: wrapper as any });

export { act };