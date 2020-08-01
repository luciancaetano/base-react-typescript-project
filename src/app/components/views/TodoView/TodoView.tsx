import React, { useCallback } from 'react';
import './TodoView.scss';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from '@types';
import { map } from 'lodash';
import { todoActions } from '@redux/actions/todo.actions';

const TodoView = () => {
  const dispatch = useDispatch();
  const todosState = useSelector((state: IAppState) => state.todos);

  const handleAddTodo = useCallback(() => {
    // eslint-disable-next-line
    dispatch(todoActions.addTodo(prompt('Conteúdo') as string));
  }, [dispatch]);

  return (
    <div>
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {map(todosState.todos, (item) => (
          <li>{item.title} {item.checked ? '(X)' : '( )'}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TodoView);
