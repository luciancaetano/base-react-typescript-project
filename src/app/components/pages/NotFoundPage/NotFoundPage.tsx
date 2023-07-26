import React from 'react';
import clsx from 'clsx';
import { NotFoundPageProps } from './NotFoundPage.types';
import styles from './NotFoundPage.module.scss';

function NotFoundPage(props: NotFoundPageProps) {
  const { className } = props;

  return (
    <div className={clsx('NotFoundPage', styles.NotFoundPage, className)}>
      Not Found Page
    </div>
  );
}

export default React.memo(NotFoundPage);
