import { DataModel } from '../data/data-model';

export interface StateModel {
  usersData: DataModel[];
  usersDataProcessed: DataModel[];
  sortingColumns: null | SortingModel;
  currentBool: string;
}

export interface SortingModel {
  columnIndex: number;
  increasing: boolean;
}

export interface FilterModel {
  columnIndex: number;
  query: string;
}
