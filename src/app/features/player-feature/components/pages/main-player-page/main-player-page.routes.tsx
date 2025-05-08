import Loader from '@components/elements/loader';
import React, { Suspense } from 'react';
import { RouteObject } from 'react-router';

const MainPlayerPage = React.lazy(() => import('./main-player-page'));

export const mainPlayerPageRoutes: RouteObject[] = [
  {
    path: '/main-player-page',
    element:
      (
        <Suspense fallback={<Loader/>}>
          <MainPlayerPage/>
        </Suspense>
      ),
  },
];
