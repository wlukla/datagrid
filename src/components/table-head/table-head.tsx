import React from 'react';
import { connect } from 'react-redux';
import { sortByColumn } from '../../actions';

interface TableHeadProps {
  sortBy: (columnIndex: number) => object;
}

const Head: React.FC<TableHeadProps> = ({ sortBy }) => {
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
          headings.map((heading, idx) => (
            <th
              key={heading}
              onClick={() => sortBy(idx)}
            >
              {heading}
            </th>
          ))
        }
      </tr>
    </thead>
  );
};

const mapDispatchToProps = {
  sortBy: sortByColumn,
};

export default connect(
  null,
  mapDispatchToProps,
)(Head);
