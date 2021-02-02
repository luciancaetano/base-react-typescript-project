import React, { useMemo } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { map } from 'lodash';
import { appRoutes } from '@app.routes';
import { AppRouteNameType } from '@types';
import { getAppRoute } from '@utils/router';
import { NotFoundView } from '@components/views';
import HandleSingletonRouter from './HandleSingletonRouter';

const renderRedirect = (from: string, to: AppRouteNameType) => () => <Redirect from={from} to={getAppRoute(to)} />;

const AppRouter = () => {
  const routes = useMemo(() => map(appRoutes, (route, key) => <Route path={route.path} component={route.component as any} key={`${key}`} />), []);
  return (
    <>
      <HandleSingletonRouter />
      <Switch>

        {/* Redirect Default route */}
        <Route exact path="/" render={renderRedirect('/', 'todoList')} />
        {routes}
        {/* Default route aka not found */}
        <Route component={NotFoundView} />
      </Switch>
    </>
  );
};

export default AppRouter;
