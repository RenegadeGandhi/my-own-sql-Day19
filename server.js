const express = require("express");
const bodyParser = require("body-parser");
const populateRoute = require("./routes/populate");

const app = express();
app.use(bodyParser.json());
app.use("/", populateRoute);




app.listen(3000);