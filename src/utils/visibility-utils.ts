import { cloneDeep } from 'lodash';
import { DataModel } from '../data/data-model';

const processVisibility = (columns: string[], newColumn: string): string[] => {
  let resColumns = [...columns];

  if (columns.includes(newColumn)) {
    resColumns = columns.filter((col) => col !== newColumn);
  } else {
    resColumns.push(newColumn);
  }

  return resColumns;
};

const filterVisibility = (data: DataModel[], columns: string[]) => {
  const resData = cloneDeep(data);

  for (let i = 0; i < resData.length; i += 1) {
    for (let j = 0; j < columns.length; j += 1) {
      delete resData[i][columns[j]];
    }
  }

  return resData;
};

export {
  processVisibility,
  filterVisibility,
};
