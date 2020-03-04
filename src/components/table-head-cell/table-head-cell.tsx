import React from 'react';

interface TableHeadCellProps {
  children: string;
}

const TableHeadCell: React.FC<TableHeadCellProps> = ({ children }) => (
  <th>{children}</th>
);

export default TableHeadCell;
