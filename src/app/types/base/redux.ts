import { ThunkDispatch } from 'redux-thunk';
import { IAppState } from '@types';

export interface IAppAction<T = any | undefined> {
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
| ((dispatch: A) => Promise<void>);
