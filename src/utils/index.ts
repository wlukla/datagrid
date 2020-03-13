import { DataModel } from '../data/data-model';
import { StateModel } from '../reducer/types';
import { filterVisibility } from './visibility-utils';
import { filterAll, filterBool, filterEnum } from './filter-utils';
import { sort } from './sorting-utils';

const applyAllSettings = (state: StateModel): DataModel[] => {
  const {
    usersData,
    sortingColumns,
    currentBool,
    enumFilters,
    hiddenColumns,
    query,
  } = state;

  let resData = filterVisibility(usersData, hiddenColumns);
  resData = filterBool(resData, currentBool);
  resData = filterEnum(resData, enumFilters);
  resData = filterAll(resData, query);
  resData = sort(resData, sortingColumns);

  return resData;
};

export default applyAllSettings;
