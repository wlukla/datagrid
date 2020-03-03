import React from 'react';

interface TableCellProps {
  children: string | number;
  scope?: string;
  th?: true;
}

const TableCell: React.FC<TableCellProps> = ({ children, th }) => {
  const Cell = th
    ? <th className="table-cell">{children}</th>
    : <td className="table-cell">{children}</td>;

  return Cell;
};

export default TableCell;
