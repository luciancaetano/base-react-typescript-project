import React, { useCallback } from 'react';
import './TodoView.scss';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from '@types';
import { map } from 'lodash';
import { todoActions } from '@redux/actions/todo.actions';
import { useTranslation } from 'react-i18next';

const TodoView = () => {
  const [_, i18n] = useTranslation('global');
  const dispatch = useDispatch();
  const todosState = useSelector((state: IAppState) => state.todos.todos);

  const handleAddTodo = useCallback(() => {
    // eslint-disable-next-line
    dispatch(todoActions.addTodo(prompt('Conteúdo') as string));
  }, [dispatch]);

  const handleToggleTodo = useCallback((id: string) => () => {
    dispatch(todoActions.toggleTodo(id));
  }, [dispatch]);

  (window as any).i18n = i18n;

  return (
    <div>
      <button onClick={handleAddTodo}>{_('action/add_todo')}</button>
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
