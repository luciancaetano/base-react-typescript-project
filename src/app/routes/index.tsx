import { Navigate, Outlet, RouteObject } from 'react-router-dom';

import MainLayout from '@components/layouts/main-layout';
import { homePageRoutes } from '@components/pages/home-page';
import { protectedPageRoutes } from '@components/pages/protected-page';

export default [
  {
    path: '/',
    element: <MainLayout><Outlet /></MainLayout >,
    children: [...homePageRoutes, ...protectedPageRoutes],
  },
  {
    path: '/login',
    element: <Navigate to="/" />,
  },
  {
    path: '*',
    element: <div>404</div>,
  },
] as RouteObject[];
