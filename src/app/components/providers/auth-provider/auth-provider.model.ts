import { AuthProviderProps, AuthProviderStore } from './auth-provider.types';
import { ITenant, IUser } from '@app/types/auth';
import { useCallback, useEffect, useRef, useState } from 'react';

function getSaveAuthData(): AuthProviderStore {
  const userJson = localStorage.getItem('user');
  const token = localStorage.getItem('token');
  const tenantsJson = localStorage.getItem('tenants');

  if(!userJson || !token || !tenantsJson) return {
    isAuthenticated: false,
  };

  try {
    const usr = JSON.parse(userJson) as IUser;
    const tenants = JSON.parse(tenantsJson);

    if(usr.id && tenants) {
      return {
        isAuthenticated: true,
        token,
        user: usr,
        tenants,
      };
    }

    return {
      isAuthenticated: false,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch(e) {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('tenants');
    localStorage.removeItem('current-tenant-id');
  }

  return {
    isAuthenticated: false,
  };
}

function useAuthProviderModel({ }: AuthProviderProps) {
  const initalizedState = useRef<boolean>(false);
  const [ currentTenantID, setCurrentTenantID ] = useState<string | null>(null);

  const [ store, setStore ] = useState<AuthProviderStore>(getSaveAuthData());

  const authenticate = useCallback((token: string, user: IUser, tenants?: ITenant[]) => {
    setStore({
      isAuthenticated: true,
      user,
      token,
      tenants,
    });

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('tenants', JSON.stringify(tenants));
    localStorage.setItem('token', token);

    setCurrentTenantID(user.defaultTenantId ?? tenants?.[0].id ?? null);
  }, []);

  const signout = useCallback(() => {
    setStore({
      isAuthenticated: false,
      user: undefined,
      token: undefined,
    });
    localStorage.removeItem('user');
  }, []);

  useEffect(() => {
    if(!initalizedState.current) {
      initalizedState.current = true;

      const userJson = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      const tenantsJson = localStorage.getItem('tenants');

      if(!userJson || !token || !tenantsJson) return;

      try {
        const usr = JSON.parse(userJson) as IUser;
        const tenants = JSON.parse(tenantsJson);

        if(usr.id && tenants) {
          setStore({
            isAuthenticated: true,
            token,
            user: usr,
            tenants,
          });

          setCurrentTenantID(usr.defaultTenantId ?? tenants?.[0].id ?? null);
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch(e) {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        localStorage.removeItem('tenants');
        localStorage.removeItem('current-tenant-id');
      }
    }
  }, [ authenticate ]);

  useEffect(() => {
    if(currentTenantID) {
      localStorage.setItem('current-tenant-id', currentTenantID);
    } else {
      localStorage.removeItem('current-tenant-id');
    }
  }, [ currentTenantID ]);

  return {
    store,
    authenticate,
    signout,
    currentTenantID,
  };
}

export default useAuthProviderModel;
