import styles from './main-layout.module.scss';
import { MainLayoutProps } from './main-layout.types';
import clsx from 'clsx';
import React from 'react';

function MainLayout(props: MainLayoutProps) {
  const { children, className, testingID } = props;

  return (
    <div className={clsx('main-layout', 'flex min-h-screen bg-gray-100 w-full h-full', styles.mainLayout, className)} data-testid={testingID}>
      <div className="p-8 w-full h-full min-h-screen">
        {children}
      </div>
    </div>
  );
}

export default React.memo(MainLayout);