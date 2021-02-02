import React from 'react';
import { appRoutes } from '@config/app.routes';

export type AppRouteNameType = keyof typeof appRoutes | '/';
export interface IApiRouteConfig {
  [name: string]: string;
}

export interface IRouterConfigEntry {
  component: React.FunctionComponent;
  template: string;
  path: string;
}
