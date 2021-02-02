import {
  ThunkActionType,
} from '@types';

export enum TodoActionsEnum {
  TODO_ADD_ITEM = 'todo.TODO_ADD_ITEM',
  TODO_DELETE_ITEM = 'todo.TODO_DELETE_ITEM',
  TODO_UPDATE_ITEM = 'todo.TODO_UPDATE_ITEM',
  TODO_TOGGLE_ITEM = 'todo.TODO_TOGGLE_ITEM',
}

export type TodoActionType =
  | { readonly type: TodoActionsEnum.TODO_ADD_ITEM; readonly payload: { text: string } }
  | { readonly type: TodoActionsEnum.TODO_DELETE_ITEM; readonly payload: { id: string } }
  | { readonly type: TodoActionsEnum.TODO_TOGGLE_ITEM; readonly payload: { id: string } }
  | { readonly type: TodoActionsEnum.TODO_UPDATE_ITEM; readonly payload: { id: string; text: string } };

const addTodo = (text: string): TodoActionType => ({
  type: TodoActionsEnum.TODO_ADD_ITEM,
  payload: { text },
});

const toggleTodo = (id: string):ThunkActionType<TodoActionType> => (dispatch) => {
  dispatch({
    type: TodoActionsEnum.TODO_TOGGLE_ITEM,
    payload: { id },
  });
};

const deleteTodo = (id: string): ThunkActionType<TodoActionType> => (dispatch) => {
  dispatch({
    type: TodoActionsEnum.TODO_DELETE_ITEM,
    payload: { id },
  });
};

const updateTodo = (id: string, text: string): ThunkActionType<TodoActionType> => (dispatch) => {
  dispatch({
    type: TodoActionsEnum.TODO_UPDATE_ITEM,
    payload: { id, text },
  });
};

export const todoActions = {
  addTodo, toggleTodo, deleteTodo, updateTodo,
};
