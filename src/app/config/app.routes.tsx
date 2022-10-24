import React from 'react';
import { RouteObject } from 'react-router';
import AppLayout from '@components/partials/AppLayout';
import NotFoundView from '@components/views/NotFoundView/NotFoundView';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <h1>Home</h1> },
      { path: '*', element: <NotFoundView /> },
    ],
  },
  // 404

];

export default routes;
