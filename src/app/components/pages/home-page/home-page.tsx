import clsx from 'clsx';
import React from 'react';
import { HiOutlineTrash } from 'react-icons/hi2';

import Button from '@components/elements/button';
import { withResourceBundle } from '@lib/i18n';

import styles from './home-page.module.scss';
import { HomePageProps } from './home-page.types';
import useHomePageViewModel from './home-page.view-model';


function HomePage(props: HomePageProps) {
  const { className, testingID } = props;


  const { addTodo, handleInputChange, removeTodo, todoItems, todoText, toggleTodo, handleLogin, isAuthenticated, signout, changeLanguage, language, t } = useHomePageViewModel(props);

  return (
    <div className={clsx('home-page', styles.homePage, 'bg-gradient-to-r from-purple-500 to-indigo-600', 'text-white', 'p-8', 'rounded-lg', 'h-full', className)} data-testid={testingID}>
      <div className="bg-white p-8 rounded-lg shadow-xl mt-16 mx-auto max-w-2xl">
        <h1 className="text-4xl font-bold mb-6 text-center text-purple-700">✨ {t('title')} ✨</h1>
        <div className="flex mb-6">
          <input
            type="text"
            value={todoText}
            onChange={handleInputChange}
            placeholder={t('inputPlaceholder')}
            className="flex-1 border p-3 rounded-l focus:outline-none focus:shadow-outline-purple text-gray-700"
          />
          <button
            className="bg-purple-700 text-white p-3 rounded-r hover:bg-purple-800 focus:outline-none focus:shadow-outline-purple"
            onClick={addTodo}
          >
            {t('addTodo')}
          </button>
        </div>
        <ul>
          {todoItems.map((todo) => (
            <li
              key={todo.id}
              className={clsx('flex items-center justify-between bg-gray-200 p-4 mb-4 rounded text-gray-700', { 'line-through': todo.completed })}
              onClick={toggleTodo(todo.id)}
            >
              <span className="text-lg">{todo.text}</span>
              <button className="text-red-500 hover:text-red-700 focus:outline-none" onClick={removeTodo(todo.id)}>
                <HiOutlineTrash />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-xl mt-8 mx-auto max-w-2xl">
        {isAuthenticated && <div className="text-green-500 text-lg font-bold mb-4">🔐 Authenticated 🔐</div>}
        {!isAuthenticated && (
          <Button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline-purple" onClick={handleLogin}>
            {t('login')}
          </Button>
        )}
        {isAuthenticated && (
          <Button className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded ml-4 focus:outline-none focus:shadow-outline-red" onClick={signout}>
            {t('logout')}
          </Button>
        )}
        <a href="/#/protected-page" className="block text-center text-purple-700 mt-4 underline hover:text-purple-800">
          {t('goToProtectedPage')}
        </a>

        <div className="text-center text-gray-500 mt-4">
          {t('currentLanguage', { language: language })}
          <div className="flex justify-center mt-4">
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline-purple" onClick={changeLanguage('en')}>
              en
            </button>
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded ml-4 focus:outline-none focus:shadow-outline-purple" onClick={changeLanguage('pt-BR')}>
              pt-BR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(withResourceBundle(HomePage, () => import('./translations')));