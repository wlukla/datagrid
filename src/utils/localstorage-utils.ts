import { StateModel } from '../reducer/types';

const saveSettings = (state: StateModel) => {
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

export default saveSettings;
