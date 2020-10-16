import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { AppRouter, AppLayout } from '@components/partials';
import { DeviceProvider } from '@components/elements';
import { PersistGate } from 'redux-persist/integration/react';
import { Store } from 'redux';
import { Persistor } from 'redux-persist';
import configureStore from './redux/configurestore';

const App = () => {
  const [store, setStore] = useState<Store | null>(null);
  const [persistor, setPersistor] = useState<Persistor | null>(null);

  useEffect(() => {
    configureStore().then((result) => {
      setStore(result.store);
      setPersistor(result.persistor);
    });
  }, []);

  if (!store || !persistor) {
    return <div>Loading...</div>;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <DeviceProvider>
          <Router>
            <AppLayout>
              <AppRouter />
            </AppLayout>
          </Router>
        </DeviceProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
