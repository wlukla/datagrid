import React from 'react';

import TableRow from '../table-row';

import generateUsers from '../../data/generate-users';

const TableBody: React.FC = () => {
  const usersData = generateUsers();

  return (
    <tbody>
      {
        usersData.map((user) => (
          <TableRow key={user.id} userData={user} />
        ))
      }
    </tbody>
  );
};

export default TableBody;
