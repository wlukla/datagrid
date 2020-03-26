import React from 'react';
import { connect } from 'react-redux';
import { StateModel } from '../../reducer/types';
import { updateCurrentBool } from '../../actions';

interface TableHeadBoolCellProps {
  active: string;
  setCurrentBool: (label: string) => object;
}

const TableHeadBoolCell: React.FC<TableHeadBoolCellProps> = ({ active, setCurrentBool }) => {
  const labels = ['All', 'Yes', 'No'];

  return (
    <div className="table-head-cell d-flex flex-column justify-content-center bg-dark">
      <span>Marital Status</span>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        {
          labels.map((label) => (
            <button
              type="button"
              className={
                label === active
                  ? 'btn btn-sm btn-secondary active'
                  : 'btn btn-sm btn-secondary'
              }
              name={label}
              key={label}
              onClick={() => setCurrentBool(label)}
            >
              {label}
            </button>
          ))
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state: StateModel) => ({
  active: state.currentBool,
});

const mapDispatchToProps = {
  setCurrentBool: updateCurrentBool,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableHeadBoolCell);
