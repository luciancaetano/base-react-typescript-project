import clsx from 'clsx';
import React from 'react';

import styles from './main-layout.module.scss';
import { MainLayoutProps } from './main-layout.types';

function MainLayout(props: MainLayoutProps) {
  const { children, className, testingID } = props;

  return (
    <div className={clsx('main-layout', 'container mx-auto', styles.mainLayout, className)} data-testid={testingID}>
      <div className="flex flex-row flex-wrap py-4">
        <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
          {children}
        </main>
      </div>
    </div>
  );
}

export default React.memo(MainLayout);