import { TAppDispatch, IAppAction } from '@types';

export const ADD_TODO = 'todo.ADD_TODO';
export const SET_VISIBILITY_FILTER = 'todo.SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'todo.TOGGLE_TODO';

const addTodo = (text: string) => (dispatch: TAppDispatch<IAppAction<string>>) => {
  dispatch({
    type: ADD_TODO,
    payload: text,
  });
};

const toggleTodo = (id: string) => (dispatch: TAppDispatch<IAppAction<string>>) => {
  dispatch({
    type: TOGGLE_TODO,
    payload: id,
  });
};

export const todoActions = { addTodo, toggleTodo };
