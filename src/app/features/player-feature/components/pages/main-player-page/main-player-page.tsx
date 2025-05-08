import styles from './main-player-page.module.scss';
import { MainPlayerPageProps } from './main-player-page.types';
import useMainPlayerPageViewModel from './main-player-page.view-model';
import Page from '@components/elements/page';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';
function MainPlayerPage(props: MainPlayerPageProps) {
  const { className, testingID, style } = props;

  const { counter, handleIncClick } = useMainPlayerPageViewModel(props);

  return (
    <Page className={clsx('main-player-page', styles.mainPlayerPage, className)} testingID={testingID} style={style}>
      <div>{counter}</div>
      <button onClick={handleIncClick}>Increment</button>
    </Page>
  );
}

export default React.memo(withResourceBundle( MainPlayerPage , () => import('./translations')));
