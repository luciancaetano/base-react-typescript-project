import React, { useCallback } from 'react';
import './TodoView.scss';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from '@types';
import { map } from 'lodash';
import { todoActions } from '@redux/actions/todo.actions';

const TodoView = () => {
  const dispatch = useDispatch();
  const todosState = useSelector((state: IAppState) => state.todos.todos);

  const handleAddTodo = useCallback(() => {
    // eslint-disable-next-line
    dispatch(todoActions.addTodo(prompt('Conteúdo') as string));
  }, [dispatch]);

  const handleToggleTodo = useCallback((id: string) => () => {
    dispatch(todoActions.toggleTodo(id));
  }, [dispatch]);

  return (
    <div>
      <button onClick={handleAddTodo}>Add</button>
      <ul className="todoList">
        {map(todosState, (item, id) => (
          <li
            className="todoItem"
            onClick={handleToggleTodo(id)}
          >{item.checked ? '☑' : '☐'}&nbsp;{item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TodoView);
