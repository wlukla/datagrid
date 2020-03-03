import React from 'react';

import Head from '../table-head';
import TableBody from '../table-body';

const Table: React.FC = () => (
  <table className="table table-sm table-hover table-striped table-responsive">
    <Head />
    <TableBody />
  </table>
);

export default Table;
