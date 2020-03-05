interface DataModel {
  id: number;
  name: string;
  jobTitle: string;
  companyName: string;
  yearlySalary: number;
  country: string;
  email: string;
  phone: string;
  [key: string]: string | number;
}

export default DataModel;
