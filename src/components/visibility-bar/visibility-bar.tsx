import React from 'react';
import { connect } from 'react-redux';
import { updateColumnVisibility } from '../../actions';

interface VisibilityBarProps {
  toggleVisibility: typeof updateColumnVisibility;
}

const VisibilityBar: React.FC<VisibilityBarProps> = ({ toggleVisibility }) => {
  const headingWithLabels: string[][] = [
    ['ID', 'id'],
    ['Name', 'name'],
    ['Country', 'country'],
    ['Salary (yearly), k$', 'yearlySalary'],
    ['Phone number', 'phone'],
    ['Marital Status', 'maritalStatus'],
    ['EmploymentStatus', 'employmentStatus'],
  ];

  const buttons = headingWithLabels.map((col) => (
    <button
      type="button"
      className="btn btn-secondary"
      key={col[0]}
      onClick={() => toggleVisibility(col[1])}
    >
      { col[0] }
    </button>
  ));

  return (
    <div className="btn-group mr-2" role="group">
      { buttons }
    </div>
  );
};

const mapDispatchToProps = {
  toggleVisibility: updateColumnVisibility,
};

export default connect(
  null,
  mapDispatchToProps,
)(VisibilityBar);
