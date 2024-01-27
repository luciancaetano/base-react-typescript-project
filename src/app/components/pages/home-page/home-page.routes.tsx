import HomePage from "./home-page";
import { RouteObject } from "react-router";

export const homePageRoutes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
];
