const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const routes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3000

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
