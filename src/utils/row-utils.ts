import { union } from 'lodash';
import { DataModel } from '../data/data-model';

const processRows = (rows: number[], newRow: number) => {
  let resRows = [...rows];
  if (rows.includes(newRow)) {
    resRows = resRows.filter((row) => row !== newRow);
  } else {
    resRows.push(newRow);
  }

  return resRows;
};

const processDeletedRows = (oldRows: number[], newRows: number[]) => (
  union(oldRows, newRows)
);

const deleteRows = (data: DataModel[], rows: number[]) => {
  const resData = data.filter((user) => !rows.includes(user.id));
  return resData;
};

export {
  processRows,
  processDeletedRows,
  deleteRows,
};
