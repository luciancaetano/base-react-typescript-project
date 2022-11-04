import React from 'react';
import { RouteObject } from 'react-router';
import AppLayout from '@components/partials/AppLayout';
import NotFoundView from '@components/views/NotFoundView/NotFoundView';
import HomeView from '@components/views/HomeView';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomeView /> },
    ],
  },
  // 404
  { path: '*', element: <AppLayout />, children: [{ path: '*', element: <NotFoundView /> }] },
];

export default routes;
