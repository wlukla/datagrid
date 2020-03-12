import { Dispatch } from 'redux';
import { DataModel } from '../data/data-model';
import generateUsers from '../data/generate-users';
import { SortingModel, FilterModel } from '../reducer/types';
import {
  ActionTypeRequest,
  ActionTypeSuccess,
  FilterByColumn,
  FilterByAll,
  UpdateCurrentBool,
  EActionTypes,
  UpdateEnum,
  AddColumnToSort,
  ReplaceSortColumns,
  UpdateColumnVisibility,
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

const addColumnToSort = (sortingSettings: SortingModel): AddColumnToSort => ({
  type: EActionTypes.ADD_COLUMN_TO_SORT,
  payload: sortingSettings,
});

const replaceSortColumns = (sortingSettings: SortingModel): ReplaceSortColumns => ({
  type: EActionTypes.REPLACE_SORT_COLUMNS,
  payload: sortingSettings,
});

const filterByColumn = (filterSettings: FilterModel): FilterByColumn => ({
  type: EActionTypes.FILTER_BY_COLUMN,
  payload: filterSettings,
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

export {
  loadUserData,
  filterByColumn,
  filterByAll,
  updateCurrentBool,
  updateEnum,
  addColumnToSort,
  replaceSortColumns,
  updateColumnVisibility,
};
