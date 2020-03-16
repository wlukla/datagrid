import React from 'react';

import './table-body-cell.scss';

interface TableBodyCellProps {
  children: string | number | boolean;
  index: number;
}

const TableBodyCell: React.FC<TableBodyCellProps> = ({ children, index }) => (
  <div
    className={index === 0
      ? 'table-cell sticky-body-cell'
      : 'table-cell'}
  >
    {String(children)}
  </div>
);

export default TableBodyCell;
