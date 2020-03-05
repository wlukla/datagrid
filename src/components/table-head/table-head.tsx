import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { sortByColumn, filterByColumn } from '../../actions';
import { SortingModel, StateModel, FilterModel } from '../../reducer/types';

import './table-head.scss';

interface TableHeadProps {
  sortBy: (sortingSettings: SortingModel) => object;
  filterBy: (sortingSettings: FilterModel) => object;
  sortingColumns: SortingModel | null;
}

const Head: React.FC<TableHeadProps> = ({ sortBy, sortingColumns, filterBy }) => {
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

  let columnIndex: number;
  let increasing: boolean;

  if (sortingColumns) {
    columnIndex = sortingColumns.columnIndex;
    increasing = sortingColumns.increasing;
  }

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
                  className={columnIndex === idx && increasing ? 'active' : ''}
                  onClick={() => sortBy({
                    columnIndex: idx,
                    increasing: true,
                  })}
                />
                <FontAwesomeIcon
                  icon={faArrowDown}
                  className={columnIndex === idx && !increasing ? 'active' : ''}
                  onClick={() => sortBy({
                    columnIndex: idx,
                    increasing: false,
                  })}
                />
                <input
                  type="text"
                  onChange={(e) => filterBy({
                    columnIndex: idx,
                    query: e.target.value,
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

const mapStateToProps = (state: StateModel) => ({
  sortingColumns: state.sortingColumns,
});

const mapDispatchToProps = {
  sortBy: sortByColumn,
  filterBy: filterByColumn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Head);
