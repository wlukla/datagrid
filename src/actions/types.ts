import { Action } from 'redux';
import { DataModel } from '../data/data-model';
import { SortingModel, FilterModel } from '../reducer/types';

export enum EActionTypes {
  LOAD_USERS_DATA_REQUEST = 'LOAD_USERS_DATA_REQUEST',
  LOAD_USERS_DATA_SUCCESS = 'LOAD_USERS_DATA_SUCCESS',

  ADD_COLUMN_TO_SORT = 'ADD_COLUMN_TO_SORT',
  REPLACE_SORT_COLUMNS = 'REPLACE_SORT_COLUMNS',

  FILTER_BY_COLUMN = 'FILTER_BY_COLUMN',
  FILTER_BY_ALL = 'FILTER_BY_ALL',

  UPDATE_CURRENT_BOOL = 'UPDATE_CURRENT_BOOL',

  UPDATE_ENUM = 'UPDATE_ENUM',

  UPDATE_COLUMN_VISIBILITY = 'UPDATE_COLUMN_VISIBILITY',

  TOGGLE_VIRTUALIZATION = 'TOGGLE_VIRTUALIZATION',
}

export interface ActionTypeRequest extends Action {
  type: EActionTypes.LOAD_USERS_DATA_REQUEST;
}

export interface ActionTypeSuccess extends Action {
  type: EActionTypes.LOAD_USERS_DATA_SUCCESS;
  payload: DataModel[];
}

export interface AddColumnToSort extends Action {
  type: EActionTypes.ADD_COLUMN_TO_SORT;
  payload: SortingModel;
}

export interface ReplaceSortColumns extends Action {
  type: EActionTypes.REPLACE_SORT_COLUMNS;
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

export interface UpdateCurrentBool extends Action {
  type: EActionTypes.UPDATE_CURRENT_BOOL;
  payload: string;
}

export interface UpdateEnum extends Action {
  type: EActionTypes.UPDATE_ENUM;
  payload: string;
}

export interface UpdateColumnVisibility extends Action {
  type: EActionTypes.UPDATE_COLUMN_VISIBILITY;
  payload: string;
}

export interface ToggleVirtualization extends Action {
  type: EActionTypes.TOGGLE_VIRTUALIZATION;
}

export type Actions = ActionTypeSuccess
                    | ActionTypeRequest
                    | ReplaceSortColumns
                    | AddColumnToSort
                    | FilterByColumn
                    | FilterByAll
                    | UpdateCurrentBool
                    | UpdateEnum
                    | UpdateColumnVisibility
                    | ToggleVirtualization;
