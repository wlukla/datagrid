import { Dispatch } from 'redux';
import { DataModel } from '../data/data-model';
import generateUsers from '../data/generate-users';
import {
  ActionTypeRequest,
  ActionTypeSuccess,
  FilterByAll,
  UpdateCurrentBool,
  EActionTypes,
  UpdateEnum,
  AddColumnToSort,
  ReplaceSortColumns,
  UpdateColumnVisibility,
  ToggleVirtualization,
  SelectRow,
  DeleteRows,
  AddRowToSelect,
} from './types';

const loadUsersDataRequest = (): ActionTypeRequest => ({
  type: EActionTypes.LOAD_USERS_DATA_REQUEST,
});

const loadUsersDataSuccess = (usersData: DataModel[]): ActionTypeSuccess => ({
  type: EActionTypes.LOAD_USERS_DATA_SUCCESS,
  payload: usersData,
});

const loadUserData = (dispatch: Dispatch) => () => {
  dispatch(loadUsersDataRequest());

  const usersData: DataModel[] = generateUsers();
  dispatch(loadUsersDataSuccess(usersData));
};

const addColumnToSort = (idx: number): AddColumnToSort => ({
  type: EActionTypes.ADD_COLUMN_TO_SORT,
  payload: idx,
});

const replaceSortColumns = (idx: number): ReplaceSortColumns => ({
  type: EActionTypes.REPLACE_SORT_COLUMNS,
  payload: idx,
});

const filterByAll = (query: string): FilterByAll => ({
  type: EActionTypes.FILTER_BY_ALL,
  payload: query,
});

const updateCurrentBool = (label: string): UpdateCurrentBool => ({
  type: EActionTypes.UPDATE_CURRENT_BOOL,
  payload: label,
});

const updateEnum = (label: string): UpdateEnum => ({
  type: EActionTypes.UPDATE_ENUM,
  payload: label,
});

const updateColumnVisibility = (label: string): UpdateColumnVisibility => ({
  type: EActionTypes.UPDATE_COLUMN_VISIBILITY,
  payload: label,
});

const toggleVirtualization = (): ToggleVirtualization => ({
  type: EActionTypes.TOGGLE_VIRTUALIZATION,
});

const selectRow = (id: number): SelectRow => ({
  type: EActionTypes.SELECT_ROW,
  payload: id,
});

const addRowToSelect = (id: number): AddRowToSelect => ({
  type: EActionTypes.ADD_ROW_TO_SELECT,
  payload: id,
});

const deleteRows = (): DeleteRows => ({
  type: EActionTypes.DELETE_ROWS,
});

export {
  loadUserData,
  filterByAll,
  updateCurrentBool,
  updateEnum,
  addColumnToSort,
  replaceSortColumns,
  updateColumnVisibility,
  toggleVirtualization,
  selectRow,
  deleteRows,
  addRowToSelect,
};
