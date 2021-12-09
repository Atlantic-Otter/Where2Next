const express = require("express");
const cors = require("cors");
const { events, login } = require("./controllers");
const app = express();
app.use(cors());
// add app.use(express.json())?

app.get(
  "/nearbyEvents/:city/:state/:startDate/:endDate",
  events.getNearbyEvents
);

app.get('/login', login.validate);

module.exports = app;
