import Loader from '@components/elements/loader';
import { AuthenticatedRoute } from '@lib/router';
import React, { Suspense } from 'react';
import { RouteObject } from 'react-router';

const ProtectedPage = React.lazy(() => import('./protected-page'));

export const protectedPageRoutes: RouteObject[] = [
  {
    path: '/protected-page',
    Component: AuthenticatedRoute,
    children: [
      {
        path: '/protected-page',
        element: (
          <Suspense fallback={<Loader/>}>
            <ProtectedPage/>
          </Suspense>
        ),
      },
    ],
  },
];
