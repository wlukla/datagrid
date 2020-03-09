import React, { FormEvent } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import TableHeadBoolCell from '../table-head-bool-cell';
import TableHeadEnumCell from '../table-head-enum-cell';

import { addColumnToSort, replaceSortColumns, filterByColumn } from '../../actions';
import { SortingModel, StateModel } from '../../reducer/types';

import './table-head.scss';

interface TableHeadProps {
  addColumn: typeof addColumnToSort;
  replaceColumns: typeof replaceSortColumns;
  filterBy: typeof filterByColumn;
  sortingColumns: SortingModel[];
}

const Head: React.FC<TableHeadProps> = (props) => {
  const {
    addColumn,
    replaceColumns,
    sortingColumns,
    filterBy,
  } = props;

  const headings = [
    'id',
    'Name',
    'Country',
    'Salary (yearly), k$',
    'Phone number',
  ];

  const sortingIndexes: number[] = [];
  const sortingOrders: ('asc' | 'desc')[] = [];

  const getClassName = (idx: number, order: 'asc' | 'desc'): string => (
    sortingIndexes.includes(idx) && sortingOrders[sortingIndexes.indexOf(idx)] === order
      ? 'active'
      : ''
  );

  for (let i = 0; i < sortingColumns.length; i += 1) {
    sortingIndexes.push(sortingColumns[i].columnIndex);
    sortingOrders.push(sortingColumns[i].order);
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
                    className={getClassName(idx, 'desc')}
                    onClick={(e) => {
                      if (e.shiftKey) {
                        addColumn({
                          columnIndex: idx,
                          order: 'desc',
                        });
                      } else {
                        replaceColumns({
                          columnIndex: idx,
                          order: 'desc',
                        });
                      }
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className={getClassName(idx, 'asc')}
                    onClick={(e) => {
                      if (e.shiftKey) {
                        addColumn({
                          columnIndex: idx,
                          order: 'asc',
                        });
                      } else {
                        replaceColumns({
                          columnIndex: idx,
                          order: 'asc',
                        });
                      }
                    }}
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
  addColumn: addColumnToSort,
  replaceColumns: replaceSortColumns,
  filterBy: filterByColumn,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Head);
