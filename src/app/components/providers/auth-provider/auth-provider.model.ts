import { AuthProviderProps, AuthProviderStore } from './auth-provider.types';
import { useCallback, useState } from 'react';

function useAuthProviderModel({ }: AuthProviderProps) {
  const [store, setStore] = useState<AuthProviderStore>({
    isAuthenticated: false,
    user: '',
  });

  const authenticate = useCallback((user: string) => {
    setStore({
      isAuthenticated: true,
      user,
    });
  }, []);

  const signout = useCallback(() => {
    setStore({
      isAuthenticated: false,
      user: '',
    });
  }, []);

  return {
    store,
    authenticate,
    signout,
  };
}

export default useAuthProviderModel;