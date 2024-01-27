import React from 'react';
import { useRoutes } from 'react-router-dom';

import { RouterProps } from './router.types';


function Router(props: RouterProps) {
  const { routes } = props;

  return useRoutes(routes);
}

export default React.memo(Router);