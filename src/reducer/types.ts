import { DataModel, EmploymentStatus } from '../data/data-model';

export interface StateModel {
  usersData: DataModel[];
  usersDataProcessed: DataModel[];
  sortingColumns: null | SortingModel;
  currentBool: string;
  currentEnum: string[];
}

export interface SortingModel {
  columnIndex: number;
  increasing: boolean;
}

export interface FilterModel {
  columnIndex: number;
  query: string;
}
