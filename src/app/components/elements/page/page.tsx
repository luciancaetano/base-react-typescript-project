import styles from './page.module.scss';
import { PageProps } from './page.types';
import clsx from 'clsx';
import React from 'react';

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  const { children, className, testingID, ...rest } = props;

  return (
    <div
      {...rest}
      ref={ref}
      className={clsx('page', 'bg-gray-100', 'h-full', styles.page, className)}
      data-testid={testingID}
    >
      {children}
    </div>
  );
});

Page.displayName = 'Page';

export default React.memo(Page);
