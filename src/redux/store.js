import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import appReducer from './appReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware())
);

export const persistor = persistStore(store);

export default { store, persistor };
