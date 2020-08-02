import { combineReducers } from 'redux';
import { configureReducerPeristence } from '@utils/redux';
import { todoReducer } from './todo.reducer';

export default combineReducers({
  todos: configureReducerPeristence({
    name: 'todos',
    blacklist: [],
    reducer: todoReducer,
  }),
});
