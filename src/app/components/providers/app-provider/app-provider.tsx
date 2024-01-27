import { AppProviderProps } from './app-provider.types';
import ErrorFallback from './components/error-fallback';
import Loader from '@components/elements/loader';
import AuthProvider from '@components/providers/auth-provider';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter as Router } from 'react-router-dom';

function AppProvider(props: AppProviderProps) {
  const { children } = props;

  return (
    <React.Suspense
      fallback={
        <Loader />
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