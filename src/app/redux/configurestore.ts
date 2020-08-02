import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import routerMiddleware from './middleware/router';

export default createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk, routerMiddleware)));
