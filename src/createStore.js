import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from '../src/reducer/index';

export const middleware = [ReduxThunk];

export const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(...middleware)
)(createStore);

export const store = createStoreWithMiddleware(RootReducer);
