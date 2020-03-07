export enum EmploymentStatus {
  Employed = 'Employed',
  Unemployed = 'Unemployed',
  InActiveSearch = 'In active search',
  Retired = 'Retired',
}

export interface DataModel {
  id: number;
  name: string;
  jobTitle: string;
  companyName: string;
  yearlySalary: number;
  country: string;
  email: string;
  phone: string;
  maritalStatus: boolean;
  employmentStatus: EmploymentStatus;
  [key: string]: string | number | boolean;
}
