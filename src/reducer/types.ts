import DataModel from '../data/data-model';

interface StateModel {
  usersData: DataModel[];
  usersDataProcessed: DataModel[];
  sortingColumns: SortingModel[];
}

interface SortingModel {
  column: number;
  decreasing: boolean;
}

export default StateModel;
