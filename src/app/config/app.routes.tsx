import React from 'react';
import { RouteObject } from 'react-router';
import AppLayout from '@components/layouts/AppLayout';
import NotFoundPage from '@components/pages/NotFoundPage/NotFoundPage';
import HomePage from '@components/pages/HomePage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <HomePage /> },
    ],
  },
  // 404
  { path: '*', element: <AppLayout />, children: [{ path: '*', element: <NotFoundPage /> }] },
];

export default routes;
