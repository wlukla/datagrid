import React, { CSSProperties } from 'react';
import { DataModel } from '../../data/data-model';
import TableBodyCell from '../table-body-cell';

import './table-row.scss';

interface RowProps {
  userData: DataModel;
  style?: CSSProperties;
}

const TableRow: React.FC<RowProps> = ({ userData, style }) => (
  <div style={{ ...style, width: '1500px' }} className="table-row">
    {
      Object.entries(userData).map((value) => (
        <TableBodyCell key={value[0]}>{value[1]}</TableBodyCell>
      ))
    }
  </div>
);

export default TableRow;
