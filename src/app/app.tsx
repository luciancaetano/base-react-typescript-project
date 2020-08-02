import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRouter, AppLayout } from '@components/shared';
import { DeviceProvider } from '@components/elements';
import store from './redux/configurestore';

const App = () => (
  <Provider store={store}>
    <DeviceProvider>
      <Router>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </Router>
    </DeviceProvider>
  </Provider>
);

export default App;
