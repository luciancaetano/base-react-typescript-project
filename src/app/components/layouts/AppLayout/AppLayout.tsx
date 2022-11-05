import React from 'react';
import clsx from 'clsx';
import AppHeader from '@components/partials/AppHeader';
import { Outlet } from 'react-router';
import { Layout } from 'lens-ui';
import { AppLayoutProps } from './AppLayout.types';
import styles from './AppLayout.module.scss';

function AppLayout(props: AppLayoutProps) {
  const { className, testingID } = props;

  return (
    <Layout className={clsx('appLayout', styles.appLayout, className)} data-testid={testingID}>
      <AppHeader />
      <Outlet />
    </Layout>
  );
}

export default React.memo(AppLayout);
