import { DataModel } from '../data/data-model';
import { FilterModel } from '../reducer/types';

const filterColumn = (data: DataModel[], settings: FilterModel): DataModel[] => {
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

const filterAll = (data: DataModel[], query: string): DataModel[] => {
  const resData = [];

  for (let i = 0; i < data.length; i += 1) {
    const userDataValues = Object.values(data[i]);
    for (let j = 0; j < userDataValues.length; j += 1) {
      const currentUserValue = String(userDataValues[j]);
      if (currentUserValue.includes(query)) {
        resData.push(data[i]);
        break;
      }
    }
  }

  return resData;
};

const filterBool = (data: DataModel[], currentBool: string): DataModel[] => {
  if (currentBool === 'All') {
    return data;
  }

  const boolVal = currentBool === 'Yes';

  const resData = [];

  for (let i = 0; i < data.length; i += 1) {
    if (data[i].maritalStatus === boolVal) {
      resData.push(data[i]);
    }
  }

  return resData;
};

const filterEnum = (data: DataModel[], labels: string[]): DataModel[] => {
  if (!labels.length) {
    return data;
  }

  const resData = [];

  for (let i = 0; i < data.length; i += 1) {
    if (labels.includes(data[i].employmentStatus)) {
      resData.push(data[i]);
    }
  }

  return resData;
};

const processEnumFilter = (enumFilters: string[], label: string) => {
  let resEnumFilters = [];

  if (enumFilters.includes(label)) {
    resEnumFilters = enumFilters.filter((value) => value !== label);
  } else {
    resEnumFilters = [...enumFilters, label];
  }

  return resEnumFilters;
};

export {
  filterColumn,
  filterAll,
  filterBool,
  filterEnum,
  processEnumFilter,
};
