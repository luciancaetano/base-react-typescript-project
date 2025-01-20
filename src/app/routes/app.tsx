
import ExternalLayout from '@components/layouts/external-layout';
import MainLayout from '@components/layouts/main-layout';
import { homePageRoutes } from '@components/pages/home-page';
import { loginPageRoutes } from '@components/pages/login-page';
import NotFoundPage from '@components/pages/not-found-page';
import { protectedPageRoutes } from '@components/pages/protected-page';
import { signupPageRoutes } from '@components/pages/signup-page';
import { Outlet, RouteObject } from 'react-router-dom';

export default [
  {
    path: '/',
    element: <MainLayout><Outlet/></MainLayout>,
    children: [
      ...homePageRoutes,
      ...protectedPageRoutes,
      ...loginPageRoutes,
    ],
  },
  {
    path: '/login',
    element: <ExternalLayout><Outlet/></ExternalLayout>,
    children: [ ...loginPageRoutes ],
  },
  {
    path: '/sign-up',
    element: <ExternalLayout><Outlet/></ExternalLayout>,
    children: [ ...signupPageRoutes ],
  },
  {
    element: <MainLayout><NotFoundPage/></MainLayout>,
    path: '*',
  },
] as RouteObject[];
