import { sortBy } from 'lodash';
import StateModel from './types';
import { Actions } from '../actions/types';

const initialState: StateModel = {
  usersData: [],
  usersDataProcessed: [],
  sortingColumns: [],
};

const reducer = (
  state: StateModel = initialState,
  action: Actions,
): StateModel => {
  switch (action.type) {
    case 'LOAD_USERS_DATA_REQUEST':
      return {
        ...state,
      };
    case 'LOAD_USERS_DATA_SUCCESS':
      return {
        ...state,
        usersData: action.payload,
        usersDataProcessed: action.payload,
      };
    case 'SORT_BY_COLUMN':
      console.log('dispatched', action.payload, Object.keys(state.usersData));
      return {
        ...state,
        sortingColumns: state.sortingColumns.concat({
          column: action.payload,
          decreasing: true,
        }),
        usersDataProcessed: sortBy(
          state.usersData, Object.keys(state.usersData[0])[action.payload],
        ),
      };
    default:
      return state;
  }
};

export default reducer;