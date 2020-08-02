import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppRouter, AppLayout } from '@components/shared';
import store from './redux/configurestore';

const App = () => (
  <Provider store={store}>
    <Router>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </Router>
  </Provider>
);

export default App;
