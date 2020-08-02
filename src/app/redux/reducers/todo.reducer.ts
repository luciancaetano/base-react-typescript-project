import { ITodoState, IAppAction } from '@types';
import { ADD_TODO, TOGGLE_TODO } from '@redux/actions/todo.actions';
import immutable from 'seamless-immutable';
import { createReducer } from '@utils/reducer';
import { v4 as uuidv4 } from 'uuid';
import { get } from 'lodash';

const initialState = immutable<ITodoState>({
  todos: {},
});

export const todoReducer = createReducer<IAppAction, typeof initialState>(initialState, {
  [ADD_TODO]: (state, action) => state.setIn(['todos'], {
    ...state.todos,
    [uuidv4()]: {
      title: action.payload,
      checked: false,
    },
  }),
  [TOGGLE_TODO]: (state, action) => state.setIn(['todos'], {
    ...state.todos,
    [action.payload]: {
      ...get(state.todos, action.payload, {}),
      checked: !get(state.todos, [action.payload, 'checked'], false),
    },
  }),
}, 'keep-on-clear-store', 'keep-on-state-reload');
