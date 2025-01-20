import Loader from '@components/elements/loader';
import React, { Suspense } from 'react';
import { RouteObject } from 'react-router';

const PatientsListPage = React.lazy(() => import('./patients-list-page'));

export const patientsListPageRoutes: RouteObject[] = [
  {
    path: 'list',
    element:
    (
      <Suspense fallback={<Loader/>}>
        <PatientsListPage/>
      </Suspense>
    ),
  },
];
