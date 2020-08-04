import { ITodoState, IAppAction } from '@types';
import {
  TODO_ADD_ITEM, TODO_TOGGLE_ITEM, TODO_UPDATE_ITEM, TODO_DELETE_ITEM,
} from '@redux/actions/todo.actions';
import immutable from 'seamless-immutable';
import { createReducer } from '@utils/redux';
import { v4 as uuidv4 } from 'uuid';
import { get, omit } from 'lodash';

const initialState = immutable<ITodoState>({
  todos: {},
});

export const todoReducer = createReducer<IAppAction, typeof initialState>(initialState, {
  [TODO_ADD_ITEM]: (state, action) => state.setIn(['todos'], {
    ...state.todos,
    [uuidv4()]: {
      title: action.payload,
      checked: false,
    },
  }),
  [TODO_TOGGLE_ITEM]: (state, action) => state.setIn(['todos'], {
    ...state.todos,
    [action.payload]: {
      ...get(state.todos, action.payload, {}),
      checked: !get(state.todos, [action.payload, 'checked'], false),
    },
  }),
  [TODO_UPDATE_ITEM]: (state, action: IAppAction<{id: string; text: string}>) => state.setIn(['todos'], {
    ...state.todos,
    [action.payload.id]: {
      ...get(state.todos, action.payload.id, {}),
      title: action.payload.text,
    },
  }),
  [TODO_DELETE_ITEM]: (state, action) => state.setIn(['todos'], omit(state.todos, action.payload)),
}, 'keep-on-clear-store', 'keep-on-state-reload');
