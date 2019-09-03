const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "build")));


app.get("/", function (req, res) {
  return res.send("it is working ...");
});

app.listen(process.env.PORT || 8080);