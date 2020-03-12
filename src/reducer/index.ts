import { processSortingColumns, sort } from '../utils/sorting-utils';
import {
  filterColumn, filterAll, filterBool, filterEnum, processEnumFilter,
} from '../utils/filter-utils';
import {
  processVisibility, filterVisibility,
} from '../utils/visibility-utils';
import { StateModel } from './types';
import { Actions } from '../actions/types';

const initialState: StateModel = {
  usersData: [],
  usersDataProcessed: [],
  sortingColumns: [],
  currentBool: 'All',
  enumFilters: [],
  hiddenColumns: [],
  virtualized: true,
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
    case 'ADD_COLUMN_TO_SORT':
      return {
        ...state,
        sortingColumns: processSortingColumns(state.sortingColumns, action.payload),
        usersDataProcessed: sort(state.usersData, processSortingColumns(
          state.sortingColumns, action.payload,
        )),
      };
    case 'REPLACE_SORT_COLUMNS':
      return {
        ...state,
        sortingColumns: [action.payload],
        usersDataProcessed: sort(state.usersData, [action.payload]),
      };
    case 'FILTER_BY_COLUMN':
      return {
        ...state,
        usersDataProcessed: filterColumn(state.usersData, action.payload),
      };
    case 'FILTER_BY_ALL':
      return {
        ...state,
        usersDataProcessed: filterAll(state.usersData, action.payload),
      };
    case 'UPDATE_CURRENT_BOOL':
      return {
        ...state,
        currentBool: action.payload,
        usersDataProcessed: filterBool(state.usersData, action.payload),
      };
    case 'UPDATE_ENUM':
      return {
        ...state,
        enumFilters: processEnumFilter(state.enumFilters, action.payload),
        usersDataProcessed: filterEnum(
          state.usersData,
          processEnumFilter(state.enumFilters, action.payload),
        ),
      };
    case 'UPDATE_COLUMN_VISIBILITY':
      return {
        ...state,
        hiddenColumns: processVisibility(state.hiddenColumns, action.payload),
        usersDataProcessed: filterVisibility(
          state.usersData,
          processVisibility(state.hiddenColumns, action.payload),
        ),
      };
    case 'TOGGLE_VIRTUALIZATION':
      return {
        ...state,
        virtualized: !state.virtualized,
      };
    default:
      return state;
  }
};

export default reducer;
