import {
  get, isArray, forEach, toString,
} from 'lodash';
import { matchPath, RouteProps } from 'react-router-dom';
import { IRouterConfigEntry, TAppRouteName } from '@types';
import { appRoutes } from '@app.routes';

/**
 * Create an route template string
 */
const createRouteTemplate = (tpl: string) => (params: { [key: string]: string | number | null | undefined }) => {
  // eslint-disable-next-line
  const result = tpl.replace(/\:[0-9a-zA-Z_]+/g, (key) => toString(get(params, key.substring(1, key.length), 'unknown')));
  return result;
};

interface ICreateRouteParams {
  component: React.FunctionComponent;
}
/**
 * Use create route enforcing type and beautifull syntax
 * @param path
 */
export const createRoute = (path: string) => ({ component }: ICreateRouteParams): IRouterConfigEntry => ({
  component,
  template: path,
  path: path.replace(/\${([0-9a-zA-Z_]+)\}/g, (_, key) => `:${key}`),
});

export interface IAppRouteParams {
  [key: string]: string | number | null | undefined;
}

/**
 * Get app route with params
 */
export const getAppRoute = (name: TAppRouteName, params?: IAppRouteParams) => {
  const route = get(appRoutes || params, [name, 'template'], `/unknown-route/${name}`);
  return createRouteTemplate(route)(params || {});
};

/**
 * Check if route matches
 */
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
