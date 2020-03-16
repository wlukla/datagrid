const processRows = (rows: number[], newRow: number) => {
  let resRows = [...rows];
  if (rows.includes(newRow)) {
    resRows = resRows.filter((row) => row !== newRow);
  } else {
    resRows.push(newRow);
  }

  return resRows;
};

export default processRows;
