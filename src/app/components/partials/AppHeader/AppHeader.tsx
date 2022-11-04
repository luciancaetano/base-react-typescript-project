import React from 'react';
import clsx from 'clsx';
import { AppHeaderProps } from './AppHeader.types';
import styles from './AppHeader.module.scss';

function AppHeader(props: AppHeaderProps) {
  const { children, className, testingID } = props;

  // const {  } = useAppHeaderViewModel(props);

  return (
    <div className={clsx('appHeader', styles.appHeader, className)} data-testid={testingID}>
      App Header
      {children}
    </div>
  );
}

export default React.memo(AppHeader);
