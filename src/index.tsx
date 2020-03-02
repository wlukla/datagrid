import React from 'react';
import ReactDOM from 'react-dom';

import generateUsers from './data/generate-users';

import App from './App';

const users = generateUsers();
console.log(users);

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
