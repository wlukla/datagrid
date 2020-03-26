import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './table-body-cell.scss';
import { deleteRows } from '../../actions';

interface TableBodyCellProps {
  children: string | number | boolean;
  index: number;
  isSelected: boolean;
  deleteSelectedRows: typeof deleteRows;
}

const TableBodyCell: React.FC<TableBodyCellProps> = (props) => {
  const {
    children, index, isSelected, deleteSelectedRows,
  } = props;

  const createClassName = (): string => {
    let className = 'd-flex justify-content-between table-cell ';
    if (index === 0) {
      className += 'sticky-body-cell ';
    }
    if (isSelected) {
      className += 'selected-cell';
    }
    return className;
  };

  return (
    <div
      className={createClassName()}
    >
      {String(children)}
      {index === 0 && isSelected
        ? (
          <button
            type="button"
            className="btn-danger delete-button"
            onClick={() => deleteSelectedRows()}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        )
        : null}
    </div>
  );
};

const mapDispatchToProps = {
  deleteSelectedRows: deleteRows,
};

export default connect(
  null,
  mapDispatchToProps,
)(TableBodyCell);
