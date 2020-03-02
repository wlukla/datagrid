import React from 'react';
import DataModel from '../../data/data-model';

interface RowProps {
  user: DataModel;
}

const Row: React.FC<RowProps> = (props) => {
  const {
    user: {
      id,
      name,
      jobTitle,
      companyName,
      yearlySalary,
      country,
      email,
      phone,
    },
  } = props;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{jobTitle}</td>
      <td>{companyName}</td>
      <td>{yearlySalary}</td>
      <td>{country}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default Row;
