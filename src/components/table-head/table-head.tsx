import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import TableHeadBoolCell from '../table-head-bool-cell';
import TableHeadEnumCell from '../table-head-enum-cell';

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
                <div className="sorting-switchers">
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
                </div>

                <form
                  onSubmit={(e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                  }}
                  action="#"
                >
                  <input
                    className="form-control-sm search"
                    name="query"
                    type="text"
                    onChange={(e) => filterBy({
                      columnIndex: idx,
                      query: e.target.value,
                    })}
                  />
                </form>
              </div>
            </th>
          ))
        }
        <TableHeadBoolCell />
        <TableHeadEnumCell />
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
