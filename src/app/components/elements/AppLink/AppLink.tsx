/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { getAppRoute } from '@utils/router';
import { AppRouteNameType } from '@types';
import styles from './AppLink.module.scss';
import { IAppLinkProps } from './AppLink.types';

const AppLink: React.FC<IAppLinkProps> = ({
  className, children, to, params = {},
}) => {
  const history = useHistory();

  const pushPath = useCallback(
    (path: AppRouteNameType) => (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      history.push(getAppRoute(path, params));
    },
    [params, history],
  );

  return (
    <a onClick={pushPath(to)} className={clsx(styles.appLink, className)}>
      {React.Children.toArray(children)}
    </a>
  );
};

export default React.memo(AppLink);
