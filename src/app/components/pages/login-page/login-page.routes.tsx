import LoginPage from './login-page';
import { RouteObject } from 'react-router';

export const loginPageRoutes: RouteObject[] = [
  {
    path: '/login',
    element:<LoginPage />,
  },
];