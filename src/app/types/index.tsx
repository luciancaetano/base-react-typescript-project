export interface IAppAction<T = any> {
  type: string;
  payload: T;
}

export interface ITodoItem {
  title: string;
  checked: boolean;
}
export interface ITodoState {
  todos: {
    [id: string]: ITodoItem;
  };
}

export interface IAppState {
  todos: ITodoState;
}
