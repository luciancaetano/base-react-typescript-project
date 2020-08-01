export interface ITodoItem {
  title: string;
  checked: boolean;
}
export interface ITodoState {
  todos: {
    [id: string]: ITodoItem;
  };
}
