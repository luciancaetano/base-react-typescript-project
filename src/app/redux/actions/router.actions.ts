import { AppRouteNameType } from '@types';
import { IAppRouteParams, getAppRoute } from '@utils/router';

export const ROUTER_PUSH_ROUTE = 'router::PUSH';

export const pushRoute = (name: AppRouteNameType, params?: IAppRouteParams) => (dispatch: any) => {
  dispatch({
    type: ROUTER_PUSH_ROUTE,
    payload: name === '/' ? '/' : getAppRoute(name, params),
  });
};
