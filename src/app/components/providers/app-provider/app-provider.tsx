import { AppProviderProps } from './app-provider.types';
import ErrorFallback from './components/error-fallback';
import AuthProvider from '@components/providers/auth-provider';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { HashRouter as Router } from 'react-router-dom';

function AppProvider(props: AppProviderProps) {
  const { children } = props;

  return (
    <React.Suspense
      fallback={
        <p>Loading...</p>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AuthProvider>
          <Router>{children}</Router>
        </AuthProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}

export default React.memo(AppProvider);
