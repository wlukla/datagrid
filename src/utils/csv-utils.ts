import { DataModel } from '../data/data-model';

const convertToCSV = (data: DataModel[]): string => {
  let dataStr = '';
  let headersStr = '';

  const headers = Object.keys(data[0]);
  for (let i = 0; i < headers.length; i += 1) {
    headersStr += headers[i];
    if (i !== headers.length - 1) {
      headersStr += ',';
    }
  }
  headersStr += '\r\n';

  for (let i = 0; i < data.length; i += 1) {
    const dataValues = Object.values(data[i]);
    for (let j = 0; j < dataValues.length; j += 1) {
      dataStr += dataValues[j];
      if (j !== data.length - 1) {
        dataStr += ',';
      }
    }
    dataStr += '\r\n';
  }
  return headersStr + dataStr;
};

const downloadCSV = (data: DataModel[]) => {
  const csv = convertToCSV(data);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'datagrid.csv');
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  return url;
};

export default downloadCSV;
