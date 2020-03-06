interface DataModel {
  id: number;
  name: string;
  jobTitle: string;
  companyName: string;
  yearlySalary: number;
  country: string;
  email: string;
  phone: string;
  maritalStatus: boolean;
  [key: string]: string | number | boolean;
}

export default DataModel;
