import React from 'react';
import { useRoutes } from 'react-router';
import routes from '@config/app.routes';

function AppRoutes() {
  const router = useRoutes(routes);

  return router;
}

export default React.memo(AppRoutes);
