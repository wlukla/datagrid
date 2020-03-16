import React from 'react';
import { connect } from 'react-redux';
import downloadCSV from '../../utils/csv-utils';
import { StateModel } from '../../reducer/types';
import { DataModel } from '../../data/data-model';

interface CSVButtonProps {
  usersData: DataModel[];
}

const CSVButton: React.FC<CSVButtonProps> = ({ usersData }) => (
  <button
    type="button"
    className="btn btn-success btn-sm"
    onClick={() => downloadCSV(usersData)}
  >
    Download CSV
  </button>
);

const mapStateToProps = (state: StateModel) => ({
  usersData: state.usersDataProcessed,
});

export default connect(
  mapStateToProps,
)(CSVButton);
