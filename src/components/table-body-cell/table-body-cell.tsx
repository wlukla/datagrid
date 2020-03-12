import React from 'react';

interface TableBodyCellProps {
  children: string | number | boolean;
}

const TableBodyCell: React.FC<TableBodyCellProps> = ({ children }) => (
  <div className="col">{String(children)}</div>
);

export default TableBodyCell;
