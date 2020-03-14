import React from 'react';
import { connect } from 'react-redux';

import { EmploymentStatus } from '../../data/data-model';
import { updateEnum } from '../../actions';

import './table-head-enum-cell.scss';
import { StateModel } from '../../reducer/types';

interface TableHeadEnumCellProps {
  filterByEnum: typeof updateEnum;
  enumFilters: string[];
}

const TableHeadEnumCell: React.FC<TableHeadEnumCellProps> = ({ filterByEnum, enumFilters }) => (
  <div className="table-cell table-head-cell enum-col">
    <span>Employment Status</span>
    <div className="checkbox-container">
      <label htmlFor="employed">
        <input
          id="employed"
          type="checkbox"
          onChange={() => filterByEnum(EmploymentStatus.Employed)}
          checked={enumFilters.includes(EmploymentStatus.Employed)}
        />
        Employed
      </label>
      <label htmlFor="unemployed">
        <input
          id="unemployed"
          type="checkbox"
          onChange={() => filterByEnum(EmploymentStatus.Unemployed)}
          checked={enumFilters.includes(EmploymentStatus.Unemployed)}
        />
        Unemployed
      </label>
      <label htmlFor="inActiveSearch">
        <input
          id="inActiveSearch"
          type="checkbox"
          onChange={() => filterByEnum(EmploymentStatus.InActiveSearch)}
          checked={enumFilters.includes(EmploymentStatus.InActiveSearch)}
        />
        In active search
      </label>
      <label htmlFor="retired">
        <input
          id="retired"
          type="checkbox"
          onChange={() => filterByEnum(EmploymentStatus.Retired)}
          checked={enumFilters.includes(EmploymentStatus.Retired)}
        />
        Retired
      </label>
    </div>
  </div>
);

const mapStateToProps = (state: StateModel) => ({
  enumFilters: state.enumFilters,
});

const mapDispatchToProps = {
  filterByEnum: updateEnum,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableHeadEnumCell);
