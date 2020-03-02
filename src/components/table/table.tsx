import React from 'react';

import Row from '../row';

import generateUsers from '../../data/generate-users';

const Table: React.FC = () => {
  const users = generateUsers();

  return (
    <table>
      {
        users.map((user) => (
          <Row key={user.id} user={user} />
        ))
      }
    </table>
  );
};

export default Table;
