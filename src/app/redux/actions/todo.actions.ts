import { TAppDispatch, IAppAction } from '@types';

export const TODO_ADD_ITEM = 'todo.TODO_ADD_ITEM';
export const TODO_DELETE_ITEM = 'todo.TODO_DELETE_ITEM';
export const TODO_UPDATE_ITEM = 'todo.TODO_UPDATE_ITEM';
export const TODO_TOGGLE_ITEM = 'todo.TODO_TOGGLE_ITEM';

const addTodo = (text: string) => (dispatch: TAppDispatch<IAppAction<string>>) => {
  dispatch({
    type: TODO_ADD_ITEM,
    payload: text,
  });
};

const toggleTodo = (id: string) => (dispatch: TAppDispatch<IAppAction<string>>) => {
  dispatch({
    type: TODO_TOGGLE_ITEM,
    payload: id,
  });
};

const deleteTodo = (id: string) => (dispatch: TAppDispatch<IAppAction<string>>) => {
  dispatch({
    type: TODO_DELETE_ITEM,
    payload: id,
  });
};

const updateTodo = (id: string, text: string) => (dispatch: TAppDispatch<IAppAction<{id: string; text: string}>>) => {
  dispatch({
    type: TODO_UPDATE_ITEM,
    payload: { id, text },
  });
};

export const todoActions = {
  addTodo, toggleTodo, deleteTodo, updateTodo,
};
