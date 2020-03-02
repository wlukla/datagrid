import React from 'react';

import Row from '../row';

import generateUsers from '../../data/generate-users';

const TableBody: React.FC = () => {
  const users = generateUsers();

  return (
    <tbody>
      {
        users.map((user) => (
          <Row key={user.id} user={user} />
        ))
      }
    </tbody>
  );
};

export default TableBody;
