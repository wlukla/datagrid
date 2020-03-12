import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

import TableRow from '../table-row';
import { DataModel } from '../../data/data-model';
import { StateModel } from '../../reducer/types';

import { loadUserData } from '../../actions';
import { Actions } from '../../actions/types';

interface TableBodyProps {
  usersData: DataModel[];
  loadData: () => void;
}

const TableBody: React.FC<TableBodyProps> = (props) => {
  const {
    usersData,
    loadData,
  } = props;

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (usersData.length === 0) {
    return <h2>No matches</h2>;
  }

  return (
    <div className="table-body">
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            itemCount={usersData.length}
            itemSize={35}
            width={width}
          >
            {({ index, style }) => (
              <TableRow style={style} userData={usersData[index]} />
            )}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

const mapStateToProps = (state: StateModel) => ({
  usersData: state.usersDataProcessed,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  loadData: loadUserData(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableBody) as React.ComponentType;
