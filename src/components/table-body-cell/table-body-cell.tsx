import React from 'react';

import './table-body-cell.scss';

interface TableBodyCellProps {
  children: string | number | boolean;
  index: number;
  isSelected: boolean;
}

const TableBodyCell: React.FC<TableBodyCellProps> = ({ children, index, isSelected }) => {
  const createClassName = (): string => {
    let className = 'table-cell ';
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
    </div>
  );
};

export default TableBodyCell;
