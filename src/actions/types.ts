import { Action } from 'redux';
import DataModel from '../data/data-model';

export enum EActionTypes {
  LOAD_USERS_DATA_REQUEST = 'LOAD_USERS_DATA_REQUEST',
  LOAD_USERS_DATA_SUCCESS = 'LOAD_USERS_DATA_SUCCESS',
}

export interface ActionTypeRequest extends Action {
  type: EActionTypes.LOAD_USERS_DATA_REQUEST;
}

export interface ActionTypeSuccess extends Action {
  type: EActionTypes.LOAD_USERS_DATA_SUCCESS;
  payload: DataModel[];
}

export type Actions = ActionTypeSuccess | ActionTypeRequest;
