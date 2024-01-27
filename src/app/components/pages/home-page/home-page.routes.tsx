import { RouteObject } from "react-router";

import HomePage from "./home-page";

export const homePageRoutes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />,
    },
];
