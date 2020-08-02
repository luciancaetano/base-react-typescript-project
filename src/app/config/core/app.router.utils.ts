import { get, isArray, forEach } from 'lodash';
import { createRouteTemplate } from '@utils/router';
import { matchPath, RouteProps } from 'react-router-dom';
import { IRouterConfigEntry } from '@types';
import { appRoutes } from '@app.routes';

/**
 * ******************************************************************************************************************************************
 * Avoid changing this code
 * ******************************************************************************************************************************************
 */
export type TAppRouteName = keyof typeof appRoutes | '/';
export interface IAppRouteParams {
  [key: string]: string | number | null | undefined;
}

export const getAppRoute = (name: TAppRouteName, params?: IAppRouteParams) => {
  const route = get(appRoutes || params, [name, 'template'], `/unknown-route/${name}`);
  return createRouteTemplate(route)(params || {});
};

export const pushRoute = (name: TAppRouteName, params?: IAppRouteParams) => ({
  type: 'router::PUSH',
  payload: name === '/' ? '/' : getAppRoute(name, params),
} as any);

export const matchRoute = (names: TAppRouteName | TAppRouteName[], path: string, props: RouteProps = {}) => {
  const namesArray = isArray(names) ? names : [names];
  let matches = 0;
  forEach(namesArray, (name: string) => {
    const r: IRouterConfigEntry | null = get(appRoutes, name, null);
    if (r) {
      const mached = matchPath(path, {
        path: r.path,
        exact: true,
        ...props,
      });
      if (mached) {
        matches++;
      }
    }
  });

  return matches > 0;
};
