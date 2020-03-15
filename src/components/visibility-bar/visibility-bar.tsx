import React from 'react';
import { connect } from 'react-redux';
import { updateColumnVisibility } from '../../actions';
import { StateModel } from '../../reducer/types';

interface VisibilityBarProps {
  toggleVisibility: typeof updateColumnVisibility;
  hiddenColumns: string[];
}

const VisibilityBar: React.FC<VisibilityBarProps> = ({ toggleVisibility, hiddenColumns }) => {
  const headingWithLabels: string[][] = [
    ['Username', 'username'],
    ['Name', 'name'],
    ['IP address', 'ip'],
    ['Country', 'country'],
    ['Zip code', 'zipCode'],
    ['Salary (yearly), k$', 'yearlySalary'],
    ['Phone number', 'phone'],
    ['Marital Status', 'maritalStatus'],
    ['EmploymentStatus', 'employmentStatus'],
  ];

  const buttons = headingWithLabels.map((col) => (
    <button
      type="button"
      className={
        hiddenColumns.includes(col[1]) ? 'btn btn-secondary' : 'btn btn-primary'
      }
      key={col[0]}
      onClick={() => toggleVisibility(col[1])}
    >
      { col[0] }
    </button>
  ));

  return (
    <div className="btn-group btn-group-sm" role="group">
      { buttons }
    </div>
  );
};

const mapStateToProps = (state: StateModel) => ({
  hiddenColumns: state.hiddenColumns,
});

const mapDispatchToProps = {
  toggleVisibility: updateColumnVisibility,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisibilityBar);
