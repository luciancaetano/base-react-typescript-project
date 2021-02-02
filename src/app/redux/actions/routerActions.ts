import { AppRouteNameType } from '@types';
import { IAppRouteParams, getAppRoute } from '@utils/router';

export enum RouterActionsEnum {
  ROUTER_PUSH_ROUTE = 'router::PUSH'
}

export type RouterActionsType = {type: RouterActionsEnum.ROUTER_PUSH_ROUTE};

export const pushRoute = (name: AppRouteNameType, params?: IAppRouteParams) => (dispatch: any) => {
  dispatch({
    type: RouterActionsEnum.ROUTER_PUSH_ROUTE,
    payload: name === '/' ? '/' : getAppRoute(name, params),
  });
};
