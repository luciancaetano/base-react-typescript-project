import React from 'react';

import AuthProviderContextProvider from './auth-provider.context';
import useAuthProviderModel from './auth-provider.model';
import { AuthProviderProps } from './auth-provider.types';

function AuthProvider(props: AuthProviderProps) {
  const { children } = props;

  const { authenticate, signout, store: { isAuthenticated, user } } = useAuthProviderModel(props);

  return (
    <AuthProviderContextProvider value={{ authenticate, signout, isAuthenticated, user }}>
      {children}
    </AuthProviderContextProvider>
  );
}

export default React.memo(AuthProvider);