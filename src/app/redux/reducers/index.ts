import { combineReducers } from 'redux';
import { todoReducer } from './todo.reducer';

export default combineReducers({
  todos: todoReducer,
});
