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
}

const Head: React.FC<TableHeadProps> = (props) => {
  const {
    addColumn,
    replaceColumns,
    sortingColumns,
  } = props;

  const headings = [
    'ID',
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
    <div>
      <div className="table-head bg-dark">
        {
          headings.map((heading, idx) => (
            <div
              key={heading}
              className="table-head-cell"
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
              </div>
            </div>
          ))
        }
        <TableHeadBoolCell />
        <TableHeadEnumCell />
      </div>
    </div>
  );
};

const mapStateToProps = (state: StateModel) => ({
  sortingColumns: state.sortingColumns,
});

const mapDispatchToProps = {
  addColumn: addColumnToSort,
  replaceColumns: replaceSortColumns,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Head);
