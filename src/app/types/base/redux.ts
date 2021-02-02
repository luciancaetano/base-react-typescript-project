import { IAppState } from '@types';
import { ThunkAction } from 'redux-thunk';

export interface IAppAction<T = any | undefined> {
  type: string;
  payload?: T;
}

export type ReducerType<A extends IAppAction, S extends {}> = (
  state: S,
  action: A
) => S;

export type ThunkActionType<A extends IAppAction, S = IAppState> = ThunkAction<void, S, unknown, A>;
