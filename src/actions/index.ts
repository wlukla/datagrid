import { Dispatch } from 'redux';
import DataModel from '../data/data-model';
import generateUsers from '../data/generate-users';
import { SortingModel, FilterModel } from '../reducer/types';
import {
  ActionTypeRequest,
  ActionTypeSuccess,
  SortByColumn,
  FilterByColumn,
  FilterByAll,
  UpdateCurrentBool,
  EActionTypes,
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

const sortByColumn = (sortingSettings: SortingModel): SortByColumn => ({
  type: EActionTypes.SORT_BY_COLUMN,
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

const updateCurrentBool = (label: string): UpdateCurrentBool => {
  console.log(label);
  return {
    type: EActionTypes.UPDATE_CURRENT_BOOL,
    payload: label,
  };
};

export {
  loadUserData,
  sortByColumn,
  filterByColumn,
  filterByAll,
  updateCurrentBool,
};
