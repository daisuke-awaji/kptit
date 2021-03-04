import faker from "faker";

export const me = {
  id: faker.random.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  image: "https://randomuser.me/api/portraits/men/50.jpg",
};
