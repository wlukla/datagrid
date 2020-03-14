import React, { CSSProperties } from 'react';
import { connect } from 'react-redux';
import { DataModel } from '../../data/data-model';
import TableBodyCell from '../table-body-cell';

import './table-row.scss';
import { StateModel } from '../../reducer/types';
import { selectRow } from '../../actions';

interface RowProps {
  userData: DataModel;
  select: typeof selectRow;
  selectedRow: number | null;
  style?: CSSProperties;
}

const TableRow: React.FC<RowProps> = (props) => {
  const {
    userData, style, selectedRow, select,
  } = props;

  return (
    <div
      className={
        userData.id === selectedRow ? 'table-row table-row-selected' : 'table-row'
      }
      style={style}
      role="row"
      onClick={() => select(userData.id)}
    >
      {
        Object.entries(userData).map((value) => (
          <TableBodyCell key={value[0]}>{value[1]}</TableBodyCell>
        ))
      }
    </div>
  );
};

const mapStateToProps = (state: StateModel) => ({
  selectedRow: state.selectedRow,
});

const mapDispatchToProps = {
  select: selectRow,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableRow);
