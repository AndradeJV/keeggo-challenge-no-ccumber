import { faker } from '@faker-js/faker'
// import { br } from 'faker-br'

export const payload = {
  name: faker.person.firstName(),
  lastName: faker.person.lastName(),
  fullName: faker.person.fullName(),
  userName: faker.internet.userName(),
  email: faker.internet.email(),
  company: faker.company.name(),
  cep: faker.address.zipCode('##########'),
  street: faker.address.streetName(),
  cellPhone: faker.phone.number('11 9########'),
}