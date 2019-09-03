const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const bodyParser = require("body-parser");
const path = require("path");

const { generateFakeAdvisors, sort, filter } = require("./helpers");
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
  let advisors = generateFakeAdvisors();
  advisors = sort(advisors, "numOfReviews", "desc");
  advisors = filter(advisors, { language: "english", status: "offline" });
  res.json(advisors);
});

app.listen(PORT, () => {
  console.info(`App is running on port: ${PORT}`)
});