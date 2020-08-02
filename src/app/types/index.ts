import { ITodoState } from './state';

export * from './state';
export * from './base/redux';

export interface IAppState {
  todos: ITodoState;
}
