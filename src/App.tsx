import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Table from './components/table';

function App() {
  return (
    <Provider store={store}>
      <h1>Data grid</h1>
      <Table />
    </Provider>
  );
}

export default App;
