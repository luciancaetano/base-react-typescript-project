import { ThunkDispatch } from 'redux-thunk';
import { ITodoState } from './state';

export * from './state';

export interface IAppAction<T = any> {
  type: string;
  payload: T;
}

type TThunkAction<R, S, E, A extends IAppAction> = (
  dispatch: ThunkDispatch<S, E, A>,
  getState: () => S,
  extraArgument: E
) => R;

interface IThunkDispatch<S, E, A extends IAppAction> {
  <T extends A>(action: T): T;
  <R>(asyncAction: TThunkAction<R, S, E, A>): R;
}

export type TAppDispatch<A = IAppAction> = ((value: A) => void)
| IThunkDispatch<IAppState, void, IAppAction> | ((a: A) => any)
| ((dispatch: any) => Promise<void>);

export interface IAppState {
  todos: ITodoState;
}
