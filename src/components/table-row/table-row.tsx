import React, { CSSProperties } from 'react';
import { connect } from 'react-redux';
import { DataModel } from '../../data/data-model';
import TableBodyCell from '../table-body-cell';

import './table-row.scss';
import { StateModel } from '../../reducer/types';
import { selectRow, addRowToSelect } from '../../actions';

interface RowProps {
  userData: DataModel;
  select: typeof selectRow;
  addRow: typeof addRowToSelect;
  selectedRows: number[];
  style?: CSSProperties;
}

const TableRow: React.FC<RowProps> = (props) => {
  const {
    userData, style, selectedRows, select, addRow,
  } = props;

  return (
    <div
      className="table-row"
      style={style}
      role="row"
      onClick={(e) => {
        if (e.shiftKey) {
          addRow(userData.id);
        } else {
          select(userData.id);
        }
      }}
    >
      {
        Object.entries(userData).map((value, idx) => (
          <TableBodyCell
            key={value[0]}
            index={idx}
            isSelected={selectedRows.includes(userData.id)}
          >
            {value[1]}
          </TableBodyCell>
        ))
      }
    </div>
  );
};

const mapStateToProps = (state: StateModel) => ({
  selectedRows: state.selectedRows,
});

const mapDispatchToProps = {
  select: selectRow,
  addRow: addRowToSelect,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableRow);
