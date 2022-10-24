import React from 'react';
import styles from './NotFoundView.module.scss';

function NotFoundView() {
  return (
    <div className={styles.notFoundView}>
      Page Not Found
    </div>
  );
}

export default React.memo(NotFoundView);
