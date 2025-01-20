import AppHeader from './components/app-header';
import styles from './main-layout.module.scss';
import { MainLayoutProps } from './main-layout.types';
import { useAuth } from '@components/providers/auth-provider';
import clsx from 'clsx';
import React from 'react';
import { Navigate } from 'react-router-dom';

function MainLayout(props: MainLayoutProps) {
  const { children, className, testingID } = props;

  const { isAuthenticated } = useAuth();

  if(!isAuthenticated) {
    return <Navigate to={'/login'}/>;
  }

  return (
    <div className={clsx('main-layout', styles.mainLayout, className)} data-testid={testingID}>
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <AppHeader/>
          <main className="flex flex-1 overflow-x-auto w-full bg-gray-100 dark:bg-transparent">
            <div className="flex flex-1 mx-auto p-2 md:p-4 2xl:p-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default React.memo(MainLayout);
