const getSearchParams = () => {
  const url: string = window.location.href;
  const paramsString = url.split('?')[1] || '';
  const searchParams = new URLSearchParams(paramsString);
  return searchParams;
};

const getQuery = () => {
  const searchParams = getSearchParams();
  return searchParams.get('q');
};

const getEmploymentStatus = () => {
  const searchParams = getSearchParams();
  const employmentStatusStr = searchParams.get('employmentStatus');
  if (employmentStatusStr) {
    return employmentStatusStr.split(',');
  }

  return searchParams.getAll('employmentStatus');
};

export {
  getQuery,
  getEmploymentStatus,
};
