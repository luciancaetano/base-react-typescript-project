/* eslint-disable no-alert */
import React, { useCallback } from 'react';
import './TodoView.scss';
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from '@types';
import { map, get } from 'lodash';
import { todoActions } from '@redux/actions/todo.actions';
import { useTranslation } from 'react-i18next';

const TodoView = () => {
  const [_] = useTranslation('global');
  const dispatch = useDispatch();
  const todosState = useSelector((state: IAppState) => state.todos.todos);

  const handleAddTodo = useCallback(() => {
    const text:string | null = prompt('Text');

    if (!!text && String(text).trim().length > 0) {
      dispatch(todoActions.addTodo(text));
    }
  }, [dispatch]);

  const handleUpdateItem = useCallback((id: string) => () => {
    const text:string | null = prompt('Text', get(todosState, [id, 'title'], ''));

    if (!!text && String(text).trim().length > 0) {
      dispatch(todoActions.updateTodo(id, text));
    }
  }, [dispatch, todosState]);

  const handleToggleItem = useCallback((id: string) => () => {
    dispatch(todoActions.toggleTodo(id));
  }, [dispatch]);

  const handleDeleteItem = useCallback((id: string) => () => {
    dispatch(todoActions.deleteTodo(id));
  }, [dispatch]);

  return (
    <div id="todoView">
      <button onClick={handleAddTodo}>{_('action/TODO_ADD_ITEM')}</button>
      <ul className="todolist">
        {map(todosState, (item, id) => (
          <li
            className="todolist__item"
          >
            <div className="todolist__item__check" onClick={handleToggleItem(id)}>{item.checked ? '☑' : '☐'}</div>
            <div className="todolist__item__title" onClick={handleUpdateItem(id)}>{item.title}</div>
            <span className="todolist__item__trash" role="img" aria-label="trash" onClick={handleDeleteItem(id)}>🗑️</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TodoView);
