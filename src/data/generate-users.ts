import faker from 'faker';
import DataModel from './data-model';

const FAKER_SEED = 9999999;

const generateUsers = (): DataModel[] => {
  faker.seed(FAKER_SEED);
  const users = [];

  for (let i = 0; i < 1457; i += 1) {
    const name = faker.fake('{{name.lastName}}, {{name.firstName}}');
    const jobTitle = faker.name.jobTitle();
    const email = faker.internet.email();
    const country = faker.address.countryCode();
    const phone = faker.phone.phoneNumberFormat();
    const companyName = faker.company.companyName();
    const yearlySalary = +faker.finance.amount();
    const maritalStatus = faker.random.boolean();

    users.push({
      id: i,
      name,
      jobTitle,
      companyName,
      yearlySalary,
      country,
      email,
      phone,
      maritalStatus,
    });
  }

  return users;
};

export default generateUsers;
