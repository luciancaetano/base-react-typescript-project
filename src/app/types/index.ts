import { ITodoState } from './state';

export * from './state';
export * from './base/redux';
export * from './base/router';
export * from './base/device';

export interface IAppState {
  todos: ITodoState;
}
