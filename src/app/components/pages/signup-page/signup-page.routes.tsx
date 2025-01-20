import Loader from '@components/elements/loader';
import React, { Suspense } from 'react';
import { RouteObject } from 'react-router';

const SignupPage = React.lazy(() => import('./signup-page'));

export const signupPageRoutes: RouteObject[] = [
  {
    path: '/sign-up',
    element:(
      <Suspense fallback={<Loader/>}>
        <SignupPage/>
      </Suspense>
    ),
  },
];
