import Loader from '@components/elements/loader';
import React, { Suspense } from 'react';
import { RouteObject } from 'react-router';

const PasswordRecoveryPage = React.lazy(() => import('./password-recovery-page'));

export const passwordRecoveryPageRoutes: RouteObject[] = [
  {
    path: '/password-recovery',
    element:(
      <Suspense fallback={<Loader/>}>
        <PasswordRecoveryPage/>
      </Suspense>
    ),
  },
];
