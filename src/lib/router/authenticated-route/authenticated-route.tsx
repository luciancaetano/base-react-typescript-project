import { Outlet, Navigate } from 'react-router-dom';

import { useAuth } from '@components/providers/auth-provider';
import authConfig from '@config/auth.config';

import { AuthenticatedRouteProps } from './authenticated-route.types';

function AuthenticatedRoute(props: AuthenticatedRouteProps) {
  const { } = props;

  const auth = useAuth();

  if (!auth.isAuthenticated) {
    return <Navigate to={authConfig.redirectToIfNotAuthenticated} />;
  }

  return <Outlet />;
}

export default AuthenticatedRoute;