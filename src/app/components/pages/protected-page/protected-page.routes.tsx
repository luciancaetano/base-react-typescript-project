import ProtectedPage from "./protected-page";
import { AuthenticatedRoute } from "@lib/router";
import { RouteObject } from "react-router";

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