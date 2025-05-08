
import MainLayout from '@components/layouts/main-layout';
import NotFoundPage from '@components/pages/not-found-page';
import { themeShowcasePageRoutes } from '@components/pages/theme-showcase-page';
import { playerFeatureRoutes } from '@features/player-feature/routes';
import { Navigate, Outlet, RouteObject } from 'react-router-dom';

export default [
  {
    path: '/',
    element: <MainLayout><Outlet/></MainLayout>,
    children: [ ...playerFeatureRoutes, ...themeShowcasePageRoutes ],
  },
  {
    path: '/login',
    element: <Navigate to="/"/>,
  },
  {
    path: '*',
    element: <NotFoundPage/>,
  },
] as RouteObject[];
