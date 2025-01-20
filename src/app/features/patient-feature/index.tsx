import { patientsListPageRoutes } from './components/pages/patients-list-page';
import NotFoundPage from '@components/pages/not-found-page';
import { RouteObject } from 'react-router';

export const patientFeatureRoutes: RouteObject[] = [
  {
    path: '/patients',
    children: [
      ...patientsListPageRoutes,
      {
        element: <NotFoundPage/>,
        path: '/patients',
      },
    ],
  },
];
