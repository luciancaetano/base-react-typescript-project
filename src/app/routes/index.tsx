
import MainLayout from '@components/layouts/main-layout';
import { homePageRoutes } from '@components/pages/home-page';
import { loginPageRoutes } from '@components/pages/login-page';
import { protectedPageRoutes } from '@components/pages/protected-page';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';

export default [
  {
    path: '/',
    element: <MainLayout><Outlet /></MainLayout >,
    children: [ ...homePageRoutes, ...protectedPageRoutes, ...loginPageRoutes ],
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
