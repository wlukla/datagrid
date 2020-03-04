import StateModel from './types';
import { Actions } from '../actions/types';

const initialState: StateModel = {
  usersData: [],
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
      };
    default:
      return state;
  }
};

export default reducer;
