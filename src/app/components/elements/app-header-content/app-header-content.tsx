import styles from './app-header-content.module.scss';
import { AppHeaderContentProps } from './app-header-content.types';
import useAppHeaderContentViewModel from './app-header-content.view-model';
import { withResourceBundle } from '@lib/i18n';
import clsx from 'clsx';
import React from 'react';
import ReactDOM from 'react-dom';

function AppHeaderContent(props: AppHeaderContentProps) {
  const { children, className, testingID } = props;

  const { portalElement } = useAppHeaderContentViewModel(props);

  if(!portalElement) {
    return <></>;
  }

  return ReactDOM.createPortal((
    <div className={clsx('app-header-content', styles.appHeaderContent, className)} data-testid={testingID}>
      {children}
    </div>
  ), portalElement);
}

export default React.memo(withResourceBundle( AppHeaderContent , () => import('./translations')));
