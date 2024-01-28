import styles from './login-page.module.scss';
import { LoginPageProps } from './login-page.types';
import useLoginPageViewModel from './login-page.view-model';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';

function LoginPage(props: LoginPageProps) {
  const { className, testingID } = props;

  const { t, errors, handleSubmit, onSubmit, register } = useLoginPageViewModel(props);

  return (
    <div className={clsx('login-page', 'h-full min-h-screen flex items-center justify-center', styles.loginPage, className)} data-testid={testingID}>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">{t('title')}</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600 text-sm font-semibold mb-2">{t('username')}</label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
              {...register('username', { required: true })}
            />
            {errors.username && <div className="text-red-500 text-xs mt-1">{t('usernameRequired')}</div>}
          </div>

          {/* <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">Password</label>
            <input type="password" id="password" name="password" className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" required/>
          </div> */}

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none">{t('loginButton')}</button>
        </form>
      </div>
    </div>
  );
}

export default React.memo(withResourceBundle( LoginPage , () => import('./translations')));
