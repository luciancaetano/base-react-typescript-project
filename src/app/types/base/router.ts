import React from 'react';

export interface IApiRouteConfig {
  [name: string]: string;
}

export interface IRouterConfigEntry {
  component: React.FunctionComponent;
  template: string;
  path: string;
}
