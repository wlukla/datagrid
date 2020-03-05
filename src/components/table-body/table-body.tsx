import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import TableRow from '../table-row';
import DataModel from '../../data/data-model';
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

  return (
    <tbody>
      {
        usersData.map((user) => (
          <TableRow key={user.id} userData={user} />
        ))
      }
    </tbody>
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
