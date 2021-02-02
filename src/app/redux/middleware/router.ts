import {
  AnyAction, Dispatch, Middleware,
} from 'redux';
import { RouterActionsEnum } from '@redux/actions/routerActions';
import { AppSingleton } from '@utils/singleton';

const routerMiddleware: Middleware = () => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  next(action);

  if (action.type === RouterActionsEnum.ROUTER_PUSH_ROUTE) {
    AppSingleton.getInstance().pushRoute(action.payload);
  }
};

export default routerMiddleware;
