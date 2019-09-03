const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const bodyParser = require("body-parser");
const path = require("path");
var faker = require('faker');

const PORT = process.env.PORT || 8000;

const app = express();


// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "build")));

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  return res.json({ status: 'UP' });
});

app.get("/advisors", (req, res) => {
  const advisors = [];
  for (let i = 0; i < 500; i++) {
    const advisor = {
      id: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      language: faker.random.arrayElement(["English", "Arabic", "German", "Spanish", "Chinese"]),
      numOfReviews: faker.random.number({ min: 0, max: 99 })
    };
    advisors.push(advisor);
  }
  res.json(advisors);
});

app.listen(PORT, () => {
  console.info(`App is running on port: ${PORT}`)
});