import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, Persistor } from 'redux-persist';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import routerMiddleware from './middleware/router';

const enhancers = composeWithDevTools(applyMiddleware(ReduxThunk, routerMiddleware));

interface IPromiseReponse {
  store: Store;
  persistor: Persistor;
}

export default () => new Promise<IPromiseReponse>((resolve) => {
  const store:Store = createStore(reducers, enhancers) as Store;
  const persistor = persistStore(store, {}, () => resolve({ store, persistor }));
});
