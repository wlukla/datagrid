import { StateModel } from '../reducer/types';
import { getQuery, getEmploymentStatus } from './query-string-utils';

export const saveSettings = (state: StateModel): void => {
  const {
    enumFilters, hiddenColumns, currentBool, query, sortingColumns,
  } = state;

  const storage = window.localStorage;

  storage.setItem('enumFilters', JSON.stringify(enumFilters));
  storage.setItem('hiddenColumns', JSON.stringify(hiddenColumns));
  storage.setItem('currentBool', JSON.stringify(currentBool));
  storage.setItem('query', JSON.stringify(query));
  storage.setItem('sortingColumns', JSON.stringify(sortingColumns));
};

export const getSettings = () => {
  const storage = window.localStorage;

  const getItem = (itemName: string) => {
    const item = storage.getItem(itemName);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  };

  const settings = {
    enumFilters: getEmploymentStatus() || getItem('enumFilters') || [],
    hiddenColumns: getItem('hiddenColumns') || [],
    currentBool: getItem('currentBool') || 'All',
    query: getQuery() || getItem('query') || '',
    sortingColumns: getItem('sortingColumns') || [],
  };

  return settings;
};
