import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import TableHeadBoolCell from '../table-head-bool-cell';
import TableHeadEnumCell from '../table-head-enum-cell';

import { addColumnToSort, replaceSortColumns } from '../../actions';
import { SortingModel, StateModel } from '../../reducer/types';

import './table-head.scss';

interface TableHeadProps {
  addColumn: typeof addColumnToSort;
  replaceColumns: typeof replaceSortColumns;
  sortingColumns: SortingModel[];
  hiddenColumns: string[];
}

const Head: React.FC<TableHeadProps> = (props) => {
  const {
    addColumn,
    replaceColumns,
    sortingColumns,
    hiddenColumns,
  } = props;

  const headingWithLabels: string[][] = [
    ['ID', 'id'],
    ['Username', 'username'],
    ['Name', 'name'],
    ['IP address', 'ip'],
    ['Country', 'country'],
    ['Zip code', 'zipCode'],
    ['Salary (yearly), k$', 'yearlySalary'],
    ['Phone number', 'phone'],
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
    <div className="table-head">
      {
        headingWithLabels.map((col, idx) => {
          if (hiddenColumns.includes(col[1])) {
            return null;
          }

          return (
            <div
              key={col[0]}
              role="button"
              className={idx === 0
                ? 'table-head-cell bg-dark sticky-cell'
                : 'table-head-cell  bg-dark'}
              onClick={(e) => {
                if (e.shiftKey) {
                  addColumn(idx);
                } else {
                  replaceColumns(idx);
                }
              }}
            >
              <span>{col[0]}</span>
              <div className="controls">
                <div className="sorting-switchers">
                  <FontAwesomeIcon
                    icon={faArrowUp}
                    className={getClassName(idx, 'desc')}
                  />
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className={getClassName(idx, 'asc')}
                  />
                </div>
              </div>
            </div>
          );
        })
      }
      {
        hiddenColumns.includes('maritalStatus') ? null : <TableHeadBoolCell />
      }
      {
        hiddenColumns.includes('employmentStatus') ? null : <TableHeadEnumCell />
      }
    </div>
  );
};

const mapStateToProps = (state: StateModel) => ({
  sortingColumns: state.sortingColumns,
  hiddenColumns: state.hiddenColumns,
});

const mapDispatchToProps = {
  addColumn: addColumnToSort,
  replaceColumns: replaceSortColumns,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Head);
