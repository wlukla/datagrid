import {
  createStore, applyMiddleware, Middleware,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import reducer from '../reducer';
import { saveSettings } from '../utils/localstorage-utils';


const settingsSaver: Middleware = (store) => (next) => (action) => {
  const res = next(action);
  saveSettings(store.getState());
  return res;
};

/* eslint-disable no-underscore-dangle */

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(settingsSaver),
  ),
);
/* eslint-enable */

export default store;
