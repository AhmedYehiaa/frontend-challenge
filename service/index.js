const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const bodyParser = require("body-parser");
const path = require("path");

const { generateFakeAdvisors, sort, filter, paginate } = require("./helpers");
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

app.post("/advisors", (req, res) => {
  // default values
  const {
    status = "any",
    language = "any",
    sortedBy = "numOfReviews",
    sortType = "desc",
    pageNumber = 1,
    pageSize = 20 // number of items per page
  } = req.body;

  let advisors = generateFakeAdvisors();
  advisors = sort(advisors, sortedBy, sortType);
  advisors = filter(advisors, { language, status });
  advisors = paginate(advisors, pageNumber, pageSize);
  res.json(advisors);
});

app.listen(PORT, () => {
  console.info(`App is running on port: ${PORT}`)
});