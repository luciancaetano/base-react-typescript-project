import styles from './loader.module.scss';
import { LoaderProps } from './loader.types';
import clsx from 'clsx';
import React from 'react';


function Loader(props: LoaderProps) {
  const { className, testingID } = props;

  return (
    <div className={clsx('loader flex items-center justify-center h-screen', styles.loader, className)} data-testid={testingID}>
      <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-25 h-16 w-16"></div>
    </div>
  );
}

export default React.memo(Loader);