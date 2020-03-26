import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Table from './components/table';
import Toolbar from './components/toolbar';

import './App.scss';

const App: React.FC = () => (
  <Provider store={store}>
    <Toolbar />
    <div className="d-flex justify-content-center">
      <span>
        Querystring example:
        {' '}
        <i>/?q=Ade&employmentStatus=In%20active%20search,Retired</i>
      </span>
    </div>
    <Table />
  </Provider>
);

export default App;
