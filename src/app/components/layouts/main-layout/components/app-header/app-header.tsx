import styles from './app-header.module.scss';
import { AppHeaderProps } from './app-header.types';
import useAppHeaderViewModel from './app-header.view-model';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';
import { HiOutlineHome } from 'react-icons/hi2';

function AppHeader(props: AppHeaderProps) {
  const { className, testingID } = props;

  const { isAuthenticated, user, initials, handleGoToHomeClick } = useAppHeaderViewModel(props);

  return (
    <header className={clsx('app-header', 'bg-white shadow-md p-4', styles.appHeader, className)} data-testid={testingID}>
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-xl font-bold text-blue-600 hover:text-blue-500 cursor-pointer"
            onClick={handleGoToHomeClick}
          >
            <HiOutlineHome className="inline-block mr-2"/>
            <span>
              MyApp
            </span>
          </h1>
        </div>
        {isAuthenticated && (
          <div className="flex items-center">
            <span className="mr-2">{user}</span>
            <div className="bg-blue-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">{initials}</div>
          </div>
        )}
      </div>
    </header>
  );
}

export default React.memo(withResourceBundle( AppHeader , () => import('./translations')));
