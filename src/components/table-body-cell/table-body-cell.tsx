import React from 'react';

interface TableBodyCellProps {
  children: string | number;
}

const TableBodyCell: React.FC<TableBodyCellProps> = ({ children }) => (
  <td>{children}</td>
);

export default TableBodyCell;
