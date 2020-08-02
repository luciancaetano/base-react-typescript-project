import { TAppDispatch, TAppRouteName } from '@types';
import { IAppRouteParams, getAppRoute } from '@utils/router';

export const ROUTER_PUSH_ROUTE = 'router::PUSH';

export const pushRoute = (name: TAppRouteName, params?: IAppRouteParams) => (dispatch: TAppDispatch) => {
  dispatch({
    type: ROUTER_PUSH_ROUTE,
    payload: name === '/' ? '/' : getAppRoute(name, params),
  });
};
