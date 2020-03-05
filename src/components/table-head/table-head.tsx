import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { sortByColumn } from '../../actions';
import { SortingModel } from '../../reducer/types';

interface TableHeadProps {
  sortBy: (sortingSettings: SortingModel) => object;
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
            >
              <span>{heading}</span>
              <div className="controls">
                <FontAwesomeIcon
                  icon={faArrowUp}
                  onClick={() => sortBy({
                    columnIndex: idx,
                    increasing: true,
                  })}
                />
                <FontAwesomeIcon
                  icon={faArrowDown}
                  onClick={() => sortBy({
                    columnIndex: idx,
                    increasing: false,
                  })}
                />
              </div>
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
