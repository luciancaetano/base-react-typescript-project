import { RouteObject } from "react-router";



import { AuthenticatedRoute } from "@lib/router";

import ProtectedPage from "./protected-page";

export const protectedPageRoutes: RouteObject[] = [
    {
        path: '/protected-page',
        Component: AuthenticatedRoute,
        children: [
            {
                path: '/protected-page',
                element: <ProtectedPage />,
            },
        ],
    },
];