import { ITodoState } from '@types';
import immutable from 'seamless-immutable';
import { createReducer } from '@utils/redux';
import { v4 as uuidv4 } from 'uuid';
import { get, omit } from 'lodash';
import { TodoActionsEnum, TodoActionType } from '@redux/actions/todo.actions';

const initialState = immutable<ITodoState>({
  todos: {},
});

export const todoReducer = createReducer<TodoActionType, typeof initialState>(initialState, (state, action) => {
  switch (action.type) {
    case TodoActionsEnum.TODO_ADD_ITEM: {
      return state.setIn(['todos'], {
        ...state.todos,
        [uuidv4()]: {
          title: action.payload.text,
          checked: false,
        },
      });
    }

    case TodoActionsEnum.TODO_TOGGLE_ITEM: {
      return state.setIn(['todos'], {
        ...state.todos,
        [action.payload.id]: {
          ...get(state.todos, action.payload.id, {}),
          checked: !get(state.todos, [action.payload.id, 'checked'], false),
        },
      });
    }

    case TodoActionsEnum.TODO_UPDATE_ITEM: {
      return state.setIn(['todos'], {
        ...state.todos,
        [action.payload.id]: {
          ...get(state.todos, action.payload.id, {}),
          title: action.payload.text,
        },
      });
    }

    case TodoActionsEnum.TODO_DELETE_ITEM: {
      return state.setIn(['todos'], omit(state.todos, action.payload.id));
    }

    default: return state;
  }
}, 'keep-on-clear-store', 'keep-on-state-reload');
