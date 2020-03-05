import { Action } from 'redux';
import DataModel from '../data/data-model';
import { SortingModel, FilterModel } from '../reducer/types';

export enum EActionTypes {
  LOAD_USERS_DATA_REQUEST = 'LOAD_USERS_DATA_REQUEST',
  LOAD_USERS_DATA_SUCCESS = 'LOAD_USERS_DATA_SUCCESS',

  SORT_BY_COLUMN = 'SORT_BY_COLUMN',

  FILTER_BY_COLUMN = 'FILTER_BY_COLUMN',
  FILTER_BY_ALL = 'FILTER_BY_ALL',
}

export interface ActionTypeRequest extends Action {
  type: EActionTypes.LOAD_USERS_DATA_REQUEST;
}

export interface ActionTypeSuccess extends Action {
  type: EActionTypes.LOAD_USERS_DATA_SUCCESS;
  payload: DataModel[];
}

export interface SortByColumn extends Action {
  type: EActionTypes.SORT_BY_COLUMN;
  payload: SortingModel;
}

export interface FilterByColumn extends Action {
  type: EActionTypes.FILTER_BY_COLUMN;
  payload: FilterModel;
}

export interface FilterByAll extends Action {
  type: EActionTypes.FILTER_BY_ALL;
  payload: string;
}

export type Actions = ActionTypeSuccess
                    | ActionTypeRequest
                    | SortByColumn
                    | FilterByColumn
                    | FilterByAll;
