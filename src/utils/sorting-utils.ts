import { orderBy } from 'lodash';
import { DataModel } from '../data/data-model';
import { SortingModel } from '../reducer/types';

const processSortingColumns = (
  sortingColumns: SortingModel[],
  newColumn: SortingModel,
): SortingModel[] => {
  let resSortingColumns: SortingModel[] = [...sortingColumns];
  const newColumnIndex: number = newColumn.columnIndex;
  const newColumnIndexInColumns = sortingColumns.findIndex((col) => (
    col.columnIndex === newColumnIndex
  ));

  if (resSortingColumns.length === 0) {
    resSortingColumns[0] = newColumn;
  } else if (newColumnIndexInColumns === -1) {
    resSortingColumns.push(newColumn);
  } else {
    resSortingColumns = [
      ...resSortingColumns.slice(0, newColumnIndexInColumns),
      newColumn,
      ...resSortingColumns.slice(newColumnIndexInColumns + 1),
    ];
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
