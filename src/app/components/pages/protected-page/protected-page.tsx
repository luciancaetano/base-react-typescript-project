
import styles from './protected-page.module.scss';
import { ProtectedPageProps } from './protected-page.types';
import useProtectedPageViewModel from './protected-page.view-model';
import Button from '@components/elements/button';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';

function ProtectedPage(props: ProtectedPageProps) {
  const { className, testingID } = props;

  const { counter, handleIncClick, signout, t, goBackToHome } = useProtectedPageViewModel(props);

  return (
    <Page className={clsx('protected-page', styles.protectedPage, className, 'bg-gradient-to-r from-purple-500 to-indigo-600')} testingID={testingID}>
      <div className="bg-white p-8 rounded-lg shadow-xl mt-16 mx-auto max-w-2xl">
        <div className="text-4xl font-bold mb-4">{t('counter')}: {counter}</div>
        <button
          onClick={handleIncClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-300"
        >
          {t('increment')}
        </button>
        <hr className="my-6 border-t border-white"/>
        <div className="text-2xl font-bold mb-4">
          {t('protectedPage')}
        </div>
        <Button onClick={signout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-red active:bg-red-800 transition duration-300">
          {t('signout')}
        </Button>
        <Button onClick={goBackToHome} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition duration-300">
          {t('goBackToHome')}
        </Button>
      </div>
    </Page>
  );
}

export default React.memo(withResourceBundle(ProtectedPage, () => import('./translations')));
