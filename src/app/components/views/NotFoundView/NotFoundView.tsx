import BasicButton from '@components/elements/BasicButton';
import React from 'react';
import styles from './NotFoundView.module.scss';

function NotFoundView() {
  return (
    <div className={styles.notFoundView}>
      Page Not Found
      <BasicButton>Basic Button</BasicButton>
      <BasicButton>Basic Button</BasicButton>
    </div>
  );
}

export default React.memo(NotFoundView);
