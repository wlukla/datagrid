import React from 'react';

interface TableCellProps {
  children: string | number;
  scope?: string;
}

const TableCell: React.FC<TableCellProps> = ({ children }) => (
  <td>{children}</td>
);

export default TableCell;
