import React from 'react';

import './table-body-cell.scss';

interface TableBodyCellProps {
  children: string | number | boolean;
}

const TableBodyCell: React.FC<TableBodyCellProps> = ({ children }) => (
  <div className="table-cell">{String(children)}</div>
);

export default TableBodyCell;
