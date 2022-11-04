import React from 'react';
import clsx from 'clsx';
import { NotFoundViewProps } from './NotFoundView.types';
import styles from './NotFoundView.module.scss';

function NotFoundView(props: NotFoundViewProps) {
  const { className } = props;

  return (
    <div className={clsx('notFoundView', styles.notFoundView, className)}>
      Not Found Page
    </div>
  );
}

export default React.memo(NotFoundView);
