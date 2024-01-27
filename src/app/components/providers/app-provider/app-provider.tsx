import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router } from 'react-router-dom';

import AuthProvider from '@components/providers/auth-provider';


import { AppProviderProps } from './app-provider.types';
import ErrorFallback from './components/error-fallback';

function AppProvider(props: AppProviderProps) {
  const { children } = props;

  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">Loading...</div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <AuthProvider>
            <Router>{children}</Router>
          </AuthProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}

export default React.memo(AppProvider);