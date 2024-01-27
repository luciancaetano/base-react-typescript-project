

import styles from './protected-page.module.scss';
import { ProtectedPageProps } from './protected-page.types';
import useProtectedPageViewModel from './protected-page.view-model';
import Button from '@components/elements/button';
import clsx from 'clsx';
import React from 'react';

function ProtectedPage(props: ProtectedPageProps) {
  const { children, className, testingID } = props;

  const { counter, handleIncClick, signout } = useProtectedPageViewModel(props);

  return (
    <div className={clsx('protected-page', styles.protectedPage, className, 'bg-gradient-to-r from-purple-500 to-indigo-600', 'text-white', 'p-8', 'rounded-lg')} data-testid={testingID}>
      {children}
      <div className="text-4xl font-bold mb-4">Counter: {counter}</div>
      <button
        onClick={handleIncClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-300"
      >
        Increment
      </button>
      <hr className="my-6 border-t border-white" />
      <div className="text-2xl font-bold mb-4">Protected Page</div>
      <Button onClick={signout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-red active:bg-red-800 transition duration-300">
        Signout
      </Button>
    </div>
  );
}

export default React.memo(ProtectedPage);