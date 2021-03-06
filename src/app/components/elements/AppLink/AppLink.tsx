/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { getAppRoute } from '@utils/router';
import { AppRouteNameType } from '@types';
import './AppLink.scss';

interface IProps {
  className?: string;
  to: AppRouteNameType;
  params?: { [key: string]: string | number | null | undefined };
}

const AppLink = ({
  className, children, to, params = {},
}: React.PropsWithChildren<IProps>) => {
  const history = useHistory();

  const pushPath = useCallback(
    (path: AppRouteNameType) => (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      history.push(getAppRoute(path, params));
    },
    [params, history],
  );

  return (
    <a onClick={pushPath(to)} className={classNames('applink', className)}>
      {React.Children.toArray(children)}
    </a>
  );
};

export default React.memo(AppLink);
