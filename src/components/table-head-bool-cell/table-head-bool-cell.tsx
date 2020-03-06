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
    <th className="d-flex flex-column">
      Marital Status
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
              onClick={() => setCurrentBool(label)}
            >
              {label}
            </button>
          ))
        }
      </div>
    </th>
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
