import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppRoutes from '@components/partials/AppRoutes';
import { DeviceProvider, ToastProvider } from 'lens-ui';
import 'lens-ui/dist/index.css';

function App() {
  return (
    <DeviceProvider>
      <ToastProvider>
        <HashRouter>
          <AppRoutes />
        </HashRouter>
      </ToastProvider>
    </DeviceProvider>
  );
}

export default App;
