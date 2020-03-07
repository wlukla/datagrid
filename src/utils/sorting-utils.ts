import { sortBy } from 'lodash';
import { DataModel } from '../data/data-model';
import { SortingModel } from '../reducer/types';

const sort = (data: DataModel[], settings: SortingModel): DataModel[] => {
  const { columnIndex, increasing } = settings;
  const columnName = Object.keys(data[0])[columnIndex];

  let resData = sortBy(data, columnName);
  if (increasing) {
    resData = resData.reverse();
  }

  return resData;
};

export default sort;
