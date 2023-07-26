import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from '@components/partials/AppRoutes';

function App() {
  return (
        <HashRouter>
          <AppRoutes />
        </HashRouter>
  );
}

export default App;
