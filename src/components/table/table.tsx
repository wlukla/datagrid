import React from 'react';

import Head from '../table-head';
import TableBody from '../table-body';

import './table.scss';

const Table: React.FC = () => (
  <div className="table-container">
    <Head />
    <TableBody />
  </div>
);

export default Table;
