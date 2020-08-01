export const ADD_TODO = 'todo.ADD_TODO';
export const SET_VISIBILITY_FILTER = 'todo.SET_VISIBILITY_FILTER';
export const TOGGLE_TODO = 'todo.TOGGLE_TODO';

export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  playload: text,
});

export const toggleTodo = (id: string) => ({
  type: 'TOGGLE_TODO',
  payload: id,
});
