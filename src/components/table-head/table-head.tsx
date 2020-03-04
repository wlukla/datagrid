import React from 'react';

import TableHeadCell from '../table-head-cell';

const Head: React.FC = () => {
  const headings = [
    'id',
    'Name',
    'Job title',
    'Company',
    'Salary (yearly), k$',
    'Country',
    'Email',
    'Phone number',
  ];

  return (
    <thead className="thead-dark">
      <tr className="table-row">
        {
          headings.map((heading) => (
            <TableHeadCell key={heading}>{heading}</TableHeadCell>
          ))
        }
      </tr>
    </thead>
  );
};

export default Head;
