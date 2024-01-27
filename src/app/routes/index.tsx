import { Outlet, RouteObject } from 'react-router-dom';

import MainLayout from '@components/layouts/main-layout';
import { homePageRoutes } from '@components/pages/home-page';

export default [
  {
    path: '/',
    element: <MainLayout><Outlet /></MainLayout >,
    children: [...homePageRoutes],
  },
] as RouteObject[];
