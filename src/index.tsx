import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import generateUsers from './data/generate-users';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const users = generateUsers();

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
