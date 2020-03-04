import React from 'react';
import DataModel from '../../data/data-model';
import TableBodyCell from '../table-body-cell';

interface RowProps {
  userData: DataModel;
}

const TableRow: React.FC<RowProps> = ({ userData }) => (
  <tr>
    {
      Object.values(userData).map((value) => (
        <TableBodyCell key={value}>{value}</TableBodyCell>
      ))
    }
  </tr>
);

export default TableRow;
