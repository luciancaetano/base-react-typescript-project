import clsx from 'clsx';
import React from 'react';

import styles from './home-page.module.scss';
import { HomePageProps } from './home-page.types';
import useHomePageViewModel from './home-page.view-model';

function HomePage(props: HomePageProps) {
  const { children, className, testingID } = props;

  const { addTodo, handleInputChange, removeTodo, todoItems, todoText, toggleTodo } = useHomePageViewModel(props);

  return (
    <div className={clsx('home-page', styles.homePage, className)} data-testid={testingID}>
      {children}
      <div className="bg-white p-8 rounded shadow-md mt-16">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <div className="flex mb-4">
          <input type="text" value={todoText} onChange={handleInputChange} placeholder="Add a new todo" className="flex-1 border p-2 rounded-l" />
          <button className="bg-blue-500 text-white p-2 rounded-r" onClick={addTodo}>Add</button>
        </div>
        <ul>
          {todoItems.map((todo) => (
            <li
              key={todo.id}
              className={clsx('flex items-center justify-between bg-gray-200 p-3 mb-2 rounded', { 'line-through': todo.completed })}
              onClick={toggleTodo(todo.id)}
            >
              <span>{todo.text}</span>
              <button className="text-red-500" onClick={removeTodo(todo.id)} >Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(HomePage);