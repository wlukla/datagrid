import React from 'react';
import DataModel from '../../data/data-model';
import TableCell from '../table-cell';

interface RowProps {
  userData: DataModel;
}

const TableRow: React.FC<RowProps> = ({ userData }) => (
  <tr>
    {
      Object.values(userData).map((value) => (
        <TableCell key={value}>{value}</TableCell>
      ))
    }
  </tr>
);

export default TableRow;
