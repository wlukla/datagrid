import { Dispatch } from 'redux';
import DataModel from '../data/data-model';
import generateUsers from '../data/generate-users';
import { SortingModel } from '../reducer/types';
import {
  ActionTypeRequest,
  ActionTypeSuccess,
  SortByColumn,
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

export {
  loadUserData,
  sortByColumn,
};
