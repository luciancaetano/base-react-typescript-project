import Loader from '@components/elements/loader';
import React, { Suspense } from 'react';
import { RouteObject } from 'react-router';

const LoginPage = React.lazy(() => import('./login-page'));

export const loginPageRoutes: RouteObject[] = [
  {
    path: '/login',
    element:(
      <Suspense fallback={<Loader />}>
        <LoginPage />
      </Suspense>
    ),
  },
];