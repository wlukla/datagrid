import React from 'react';

import TableCell from '../table-cell';

const Head: React.FC = () => {
  const headings = [
    'id',
    'Name',
    'Job title',
    'Company',
    'Salary (yearly)',
    'Country',
    'Email',
    'Phone number',
  ];

  return (
    <thead className="thead-dark">
      <tr className="table-row">
        {
          headings.map((heading) => (
            <TableCell scope="col" th key={heading}>{heading}</TableCell>
          ))
        }
      </tr>
    </thead>
  );
};

export default Head;
