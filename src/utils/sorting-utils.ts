import { orderBy } from 'lodash';
import { DataModel } from '../data/data-model';
import { SortingModel } from '../reducer/types';

const processSortingColumns = (
  sortingColumns: SortingModel[],
  newColumn: SortingModel,
) => {
  const resSortingColumns = [...sortingColumns];
  const processedColumn = { ...newColumn };

  const newColumnIndex = sortingColumns.indexOf(processedColumn);

  if (resSortingColumns.length === 0) {
    resSortingColumns[0] = processedColumn;
  } else if (newColumnIndex <= 0) {
    resSortingColumns.push(processedColumn);
  }

  return resSortingColumns;
};

const sort = (data: DataModel[], settings: SortingModel[]): DataModel[] => {
  const iteratees: string[] = [];
  const orders: ('desc' | 'asc')[] = [];
  const columnNames = Object.keys(data[0]);

  for (let i = 0; i < settings.length; i += 1) {
    iteratees.push(columnNames[settings[i].columnIndex]);
    orders.push(settings[i].order);
  }
  const resData = orderBy(data, iteratees, orders);

  return resData;
};

export {
  sort,
  processSortingColumns,
};
