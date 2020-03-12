import React from 'react';

import Head from '../table-head';
import TableBody from '../table-body';

import './table.scss';

const Table: React.FC = () => (
  <div className="table-container">
    <table
      className="table table-sm table-hover table-striped table-responsive"
    >
      <Head />
    </table>
    <TableBody />
  </div>
);

export default Table;
