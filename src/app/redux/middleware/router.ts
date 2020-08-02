import {
  AnyAction, Dispatch, Middleware,
} from 'redux';
import { ROUTER_PUSH_ROUTE } from '@redux/actions/router.actions';
import { AppSingleton } from '@utils/singleton';

const routerMiddleware: Middleware = () => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  next(action);

  if (action.type === ROUTER_PUSH_ROUTE) {
    AppSingleton.getInstance().pushRoute(action.payload);
  }
};

export default routerMiddleware;
