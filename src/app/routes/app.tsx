
import ExternalLayout from '@components/layouts/external-layout';
import MainLayout from '@components/layouts/main-layout';
import { homePageRoutes } from '@components/pages/home-page';
import { loginPageRoutes } from '@components/pages/login-page';
import NotFoundPage from '@components/pages/not-found-page';
import { passwordRecoveryPageRoutes } from '@components/pages/password-recovery-page';
import { protectedPageRoutes } from '@components/pages/protected-page';
import { signupPageRoutes } from '@components/pages/signup-page';
import { patientFeatureRoutes } from '@features/patient-feature';
import { Outlet, RouteObject } from 'react-router-dom';

export default [
  {
    path: '/',
    element: <MainLayout><Outlet/></MainLayout>,
    children: [
      ...homePageRoutes,
      ...protectedPageRoutes,
      ...loginPageRoutes,
      ...patientFeatureRoutes,
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
    path: '/password-recovery',
    element: <ExternalLayout><Outlet/></ExternalLayout>,
    children: [ ...passwordRecoveryPageRoutes ],
  },
  {
    element: <MainLayout><NotFoundPage/></MainLayout>,
    path: '*',
  },
] as RouteObject[];
