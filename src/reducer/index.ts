import { processSortingColumns, processSortingColumn } from '../utils/sorting-utils';
import { processEnumFilter } from '../utils/filter-utils';
import { processVisibility } from '../utils/visibility-utils';
import { processRows, processDeletedRows } from '../utils/row-utils';
import applyAllSettings from '../utils';
import { StateModel } from './types';
import { Actions } from '../actions/types';
import { getSettings } from '../utils/localstorage-utils';

const initialState: StateModel = {
  usersData: [],
  usersDataProcessed: [],
  virtualized: true,
  query: '',
  selectedRows: [],
  deletedRows: [],
  ...getSettings(),
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
        usersDataProcessed: applyAllSettings(state, action.payload),
      };
    case 'ADD_COLUMN_TO_SORT':
      return {
        ...state,
        sortingColumns: processSortingColumns(state.sortingColumns, action.payload),
        usersDataProcessed: applyAllSettings({
          ...state,
          sortingColumns: processSortingColumns(state.sortingColumns, action.payload),
        }),
      };
    case 'REPLACE_SORT_COLUMNS':
      return {
        ...state,
        sortingColumns: processSortingColumn(state.sortingColumns, action.payload),
        usersDataProcessed: applyAllSettings({
          ...state,
          sortingColumns: processSortingColumn(state.sortingColumns, action.payload),
        }),
      };
    case 'FILTER_BY_ALL':
      return {
        ...state,
        query: action.payload,
        usersDataProcessed: applyAllSettings({
          ...state,
          query: action.payload,
        }),
      };
    case 'UPDATE_CURRENT_BOOL':
      return {
        ...state,
        currentBool: action.payload,
        usersDataProcessed: applyAllSettings({
          ...state,
          currentBool: action.payload,
        }),
      };
    case 'UPDATE_ENUM':
      return {
        ...state,
        enumFilters: processEnumFilter(state.enumFilters, action.payload),
        usersDataProcessed: applyAllSettings({
          ...state,
          enumFilters: processEnumFilter(state.enumFilters, action.payload),
        }),
      };
    case 'UPDATE_COLUMN_VISIBILITY':
      return {
        ...state,
        hiddenColumns: processVisibility(state.hiddenColumns, action.payload),
        usersDataProcessed: applyAllSettings({
          ...state,
          hiddenColumns: processVisibility(state.hiddenColumns, action.payload),
        }),
      };
    case 'TOGGLE_VIRTUALIZATION':
      return {
        ...state,
        virtualized: !state.virtualized,
      };
    case 'SELECT_ROW':
      return {
        ...state,
        selectedRows: [action.payload],
      };
    case 'ADD_ROW_TO_SELECT':
      return {
        ...state,
        selectedRows: processRows(state.selectedRows, action.payload),
      };
    case 'DELETE_ROWS':
      return {
        ...state,
        deletedRows: processDeletedRows(state.deletedRows, state.selectedRows),
        selectedRows: [],
        usersDataProcessed: applyAllSettings({
          ...state,
          deletedRows: processDeletedRows(state.deletedRows, state.selectedRows),
        }),
      };
    default:
      return state;
  }
};

export default reducer;
