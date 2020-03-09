export enum EmploymentStatus {
  Employed = 'Employed',
  Unemployed = 'Unemployed',
  InActiveSearch = 'In active search',
  Retired = 'Retired',
}

export interface DataModel {
  id: number;
  name: string;
  country: string;
  yearlySalary: number;
  phone: string;
  maritalStatus: boolean;
  employmentStatus: EmploymentStatus;
  [key: string]: string | number | boolean;
}
