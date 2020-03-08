import React from 'react';
import { connect } from 'react-redux';

import { EmploymentStatus } from '../../data/data-model';
import { updateEnum } from '../../actions';

import './table-head-enum-cell.scss';

interface TableHeadEnumCellProps {
  filterByEnum: typeof updateEnum;
}

const TableHeadEnumCell: React.FC<TableHeadEnumCellProps> = ({ filterByEnum }) => (
  <th>
    <span>Enum</span>
    <label htmlFor="employed">
      <input
        id="employed"
        type="checkbox"
        onChange={() => filterByEnum(EmploymentStatus.Employed)}
      />
      Employed
    </label>
    <label htmlFor="unemployed">
      <input
        id="unemployed"
        type="checkbox"
        onChange={() => filterByEnum(EmploymentStatus.Unemployed)}
      />
      Unemployed
    </label>
    <label htmlFor="inActiveSearch">
      <input
        id="inActiveSearch"
        type="checkbox"
        onChange={() => filterByEnum(EmploymentStatus.InActiveSearch)}
      />
      In active search
    </label>
    <label htmlFor="retired">
      <input
        id="retired"
        type="checkbox"
        onChange={() => filterByEnum(EmploymentStatus.Retired)}
      />
      Retired
    </label>
  </th>
);

const mapDispatchToProps = {
  filterByEnum: updateEnum,
};

export default connect(
  null,
  mapDispatchToProps,
)(TableHeadEnumCell);
