import { StateModel } from '../reducer/types';

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

  const settings = {
    enumFilters: JSON.parse(storage.getItem('enumFilters') || ''),
    hiddenColumns: JSON.parse(storage.getItem('hiddenColumns') || ''),
    currentBool: JSON.parse(storage.getItem('currentBool') || ''),
    query: JSON.parse(storage.getItem('query') || ''),
    sortingColumns: JSON.parse(storage.getItem('sortingColumns') || ''),
  };

  return settings;
};
