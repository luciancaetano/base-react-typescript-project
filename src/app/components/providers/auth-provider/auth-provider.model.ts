import { AuthProviderProps, AuthProviderStore } from './auth-provider.types';
import { useCallback, useEffect, useRef, useState } from 'react';

function useAuthProviderModel({ }: AuthProviderProps) {
  const initalizedState = useRef<boolean>(false);

  const [store, setStore] = useState<AuthProviderStore>({
    isAuthenticated: false,
    user: '',
  });

  const authenticate = useCallback((user: string) => {
    setStore({
      isAuthenticated: true,
      user,
    });
    localStorage.setItem('user', user);
  }, []);

  const signout = useCallback(() => {
    setStore({
      isAuthenticated: false,
      user: '',
    });
    localStorage.removeItem('user');
  }, []);

  useEffect(() => {
    if(!initalizedState.current) {
      initalizedState.current = true;
      const user = localStorage.getItem('user');

      if(user) {
        authenticate(user);
      }
    }
  }, [authenticate]);

  return {
    store,
    authenticate,
    signout,
  };
}

export default useAuthProviderModel;