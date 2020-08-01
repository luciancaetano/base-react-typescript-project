import { TAppDispatch } from '@types';

export const ADD_TODO = 'todo.ADD_TODO';
export const SET_VISIBILITY_FILTER = 'todo.SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'todo.TOGGLE_TODO';

const addTodo = (text: string) => (dispatch: TAppDispatch) => {
  dispatch({
    type: ADD_TODO,
    playload: text,
  });
};

const toggleTodo = (id: string) => (dispatch: TAppDispatch) => {
  dispatch({
    type: TOGGLE_TODO,
    playload: id,
  });
};

export const todoActions = { addTodo, toggleTodo };
