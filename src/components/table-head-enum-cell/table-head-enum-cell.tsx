import React from 'react';
import { connect } from 'react-redux';

import { EmploymentStatus } from '../../data/data-model';
import { updateCurrentEnum } from '../../actions';

import './table-head-enum-cell.scss';

interface TableHeadEnumCellProps {
  filterByEnum: typeof updateCurrentEnum;
}

const TableHeadEnumCell: React.FC<TableHeadEnumCellProps> = ({ filterByEnum }) => (
  <th>
    <span>Enum</span>
    <select onChange={(e) => filterByEnum(e.target.value)}>
      <option value="-">–</option>
      <option value={EmploymentStatus.Employed}>Employed</option>
      <option value={EmploymentStatus.Unemployed}>Unemployed</option>
      <option value={EmploymentStatus.InActiveSearch}>In active search</option>
      <option value={EmploymentStatus.Retired}>Retired</option>
    </select>
  </th>
);

const mapDispatchToProps = {
  filterByEnum: updateCurrentEnum,
};

export default connect(
  null,
  mapDispatchToProps,
)(TableHeadEnumCell);
