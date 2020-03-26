import { DataModel } from '../data/data-model';

export interface StateModel {
  usersData: DataModel[];
  usersDataProcessed: DataModel[];
  sortingColumns: SortingModel[];
  currentBool: string;
  enumFilters: string[];
  hiddenColumns: string[];
  virtualized: boolean;
  query: string;
  selectedRows: number[];
  deletedRows: number[];
}

export interface SortingModel {
  columnIndex: number;
  order: 'desc' | 'asc';
}

export interface FilterModel {
  columnIndex: number;
  query: string;
}
