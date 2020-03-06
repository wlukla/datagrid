import React from 'react';

interface TableBodyCellProps {
  children: string | number | boolean;
}

const TableBodyCell: React.FC<TableBodyCellProps> = ({ children }) => (
  <td>{String(children)}</td>
);

export default TableBodyCell;
