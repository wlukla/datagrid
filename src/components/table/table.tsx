import React from 'react';

import Head from '../table-head';
import TableBody from '../table-body';

import './table.scss';

const Table: React.FC = () => (
  <div className="jumbotron p-3 m-4">
    <table
      className="table table-sm table-hover table-striped table-responsive"
    >
      <Head />
      <TableBody />
    </table>
  </div>
);

export default Table;
