import styles from './external-layout.module.scss';
import { ExternalLayoutProps } from './external-layout.types';
import clsx from 'clsx';
import React from 'react';

function ExternalLayout(props: ExternalLayoutProps) {
  const { children, className, testingID } = props;

  return (
    <div className={clsx('external-layout', styles.mainLayout, className)} data-testid={testingID}>
      <div className="flex h-screen overflow-hidden">
        <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <main className="flex flex-1 overflow-x-auto w-full bg-gray-100 dark:bg-dark dark:text-base-content">

            {children}

          </main>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ExternalLayout);
