import DataModel from '../data/data-model';

export interface StateModel {
  usersData: DataModel[];
  usersDataProcessed: DataModel[];
  sortingColumns: SortingModel[];
}

export interface SortingModel {
  columnIndex: number;
  increasing: boolean;
}
