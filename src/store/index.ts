import {
  createStore, applyMiddleware, Middleware, compose,
} from 'redux';
import reducer from '../reducer';
import saveSettings from '../utils/localstorage-utils';

const settingsSaver: Middleware = (store) => (next) => (action) => {
  const res = next(action);
  saveSettings(store.getState());
  return res;
};

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;
const store = createStore(
  reducer, /* preloadedState, */
  composeEnhancers(
    applyMiddleware(settingsSaver),
  ),
);
/* eslint-enable */

export default store;
