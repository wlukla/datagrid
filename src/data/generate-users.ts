import faker from 'faker';
import { DataModel, EmploymentStatus } from './data-model';

const FAKER_SEED = 9999999;

function randomEnum<T>(anEnum: T): T[keyof T] {
  const enumValues = Object.values(anEnum) as unknown as T[keyof T][];
  const randomIndex = faker.random.number() % enumValues.length;
  const randomEnumValue = enumValues[randomIndex];
  return randomEnumValue;
}

const generateUsers = (): DataModel[] => {
  faker.seed(FAKER_SEED);

  const users = [];

  for (let i = 0; i < 1457; i += 1) {
    const name = faker.name.firstName();
    const country = faker.address.countryCode();
    const yearlySalary = +faker.finance.amount();
    const phone = faker.phone.phoneNumberFormat();
    const maritalStatus = faker.random.boolean();
    const employmentStatus = randomEnum(EmploymentStatus);

    users.push({
      id: i,
      name,
      country,
      yearlySalary,
      phone,
      maritalStatus,
      employmentStatus,
    });
  }

  return users;
};

export default generateUsers;
