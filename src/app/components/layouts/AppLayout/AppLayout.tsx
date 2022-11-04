import React from 'react';
import clsx from 'clsx';
import AppHeader from '@components/partials/AppHeader';
import { Outlet } from 'react-router';
import { AppLayoutProps } from './AppLayout.types';
import styles from './AppLayout.module.scss';

function AppLayout(props: AppLayoutProps) {
  const { className, testingID } = props;

  return (
    <div className={clsx('appLayout', styles.appLayout, className)} data-testid={testingID}>
      <AppHeader />
      <Outlet />
    </div>
  );
}

export default React.memo(AppLayout);
