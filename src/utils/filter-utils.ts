import DataModel from '../data/data-model';
import { FilterModel } from '../reducer/types';

const filter = (data: DataModel[], settings: FilterModel): DataModel[] => {
  const { columnIndex, query } = settings;
  const columnName = Object.keys(data[0])[columnIndex];

  const resData = [];

  for (let i = 0; i < data.length; i += 1) {
    const userDataValue = String(data[i][columnName]);
    if (userDataValue.includes(query)) {
      resData.push(data[i]);
    }
  }

  return resData;
};

export default filter;
