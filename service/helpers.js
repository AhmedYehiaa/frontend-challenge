var faker = require('faker');

const generateFakeAdvisors = () => {
  const advisors = [];
  for (let i = 0; i < 500; i++) {
    const advisor = {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      language: faker.random.arrayElement(["English", "Arabic", "German", "Spanish", "Chinese"]),
      status: faker.random.arrayElement(["Online", "Offline"]),
      numOfReviews: faker.random.number({ min: 0, max: 99 })
    };
    advisors.push(advisor);
  }
  return advisors;
};

const sort = (list = [], sortBy, type) => {
  let sortedList = [];
  if (type === "asc")
    sortedList = list.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
  else
    sortedList = list.sort((a, b) => (a[sortBy] < b[sortBy]) ? 1 : -1);
  return sortedList;
};


const filter = (list = [], filterBy) => {
  const { status, language } = filterBy;
  let filteredList = [];
  filteredList = list.filter(item => (
    (language === "any" || item.language.toLowerCase() === language.toLowerCase())
    && (status === "any" || item.status.toLowerCase() === status.toLowerCase())));
  return filteredList;
};

const paginate = (list, pageNumber, pageSize) => {
  const offset = (pageNumber - 1) * pageSize;
  return list.slice(offset, (pageNumber * pageSize));
};

module.exports = {
  generateFakeAdvisors,
  sort,
  filter,
  paginate
}