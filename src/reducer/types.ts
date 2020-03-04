import DataModel from '../data/data-model';

interface StateModel {
  usersData: DataModel[];
  sortingColumns: SortingModel[];
}

interface SortingModel {
  column: string;
  decreasing: boolean;
}

export default StateModel;
