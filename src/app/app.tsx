import React from 'react';
import { Provider } from 'react-redux';
import { TodoView } from '@components/views';
import store from './redux/configurestore';

const App = () => (
  <Provider store={store}>
    <TodoView />
  </Provider>
);

export default App;
