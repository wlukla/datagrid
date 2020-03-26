import { orderBy } from 'lodash';
import { DataModel } from '../data/data-model';
import { SortingModel } from '../reducer/types';

const processSortingColumns = (
  sortingColumns: SortingModel[],
  idx: number,
): SortingModel[] => {
  let resSortingColumns: SortingModel[] = [...sortingColumns];

  const newColumn: SortingModel = {
    columnIndex: idx,
    order: 'asc',
  };

  if (sortingColumns.length === 0) {
    return [newColumn];
  }

  const newColumnIndexInColumns = sortingColumns.findIndex((col) => (
    col.columnIndex === idx
  ));

  if (resSortingColumns.length === 0) {
    resSortingColumns[0] = newColumn;
  } else if (newColumnIndexInColumns === -1) {
    resSortingColumns.push(newColumn);
  } else if (resSortingColumns[newColumnIndexInColumns].order === 'asc') {
    newColumn.order = 'desc';

    resSortingColumns = [
      ...resSortingColumns.slice(0, newColumnIndexInColumns),
      newColumn,
      ...resSortingColumns.slice(newColumnIndexInColumns + 1),
    ];
  } else {
    resSortingColumns = [
      ...resSortingColumns.slice(0, newColumnIndexInColumns),
      ...resSortingColumns.slice(newColumnIndexInColumns + 1),
    ];
  }

  return resSortingColumns;
};

const processSortingColumn = (
  sortingColumns: SortingModel[],
  idx: number,
): SortingModel[] => {
  const columnIndex = sortingColumns.findIndex((col) => (
    col.columnIndex === idx
  ));

  const column = sortingColumns[columnIndex];

  let res: SortingModel[] = [{
    columnIndex: idx,
    order: 'asc',
  }];

  if (column && column.order === 'asc') {
    res[0].order = 'desc';
  } else if (column) {
    res = [];
  }

  return res;
};

const sort = (data: DataModel[], settings: SortingModel[]): DataModel[] => {
  if (data.length === 0) {
    return [];
  }

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
  processSortingColumn,
};
