import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Table from './components/table';
import Toolbar from './components/toolbar';

import './App.scss';

const App: React.FC = () => (
  <Provider store={store}>
    <Toolbar />
    <Table />
  </Provider>
);

export default App;
