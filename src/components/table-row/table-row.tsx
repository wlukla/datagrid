import React from 'react';
import DataModel from '../../data/data-model';
import TableBodyCell from '../table-body-cell';

interface RowProps {
  userData: DataModel;
}

const TableRow: React.FC<RowProps> = ({ userData }) => (
  <tr>
    {
      Object.entries(userData).map((value) => (
        <TableBodyCell key={value[0]}>{value[1]}</TableBodyCell>
      ))
    }
  </tr>
);

export default TableRow;
