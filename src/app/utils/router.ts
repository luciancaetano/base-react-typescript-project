import { get, toString } from 'lodash';
import { IRouterConfigEntry } from '@types';

/**
 * Create an route template string
 */
export const createRouteTemplate = (tpl: string) => (params: { [key: string]: string | number | null | undefined }) => {
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
