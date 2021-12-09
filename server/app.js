const express = require("express");
const cors = require("cors");
const { events, login, flights } = require("./controllers");
const app = express();
app.use(cors());

app.use(express.static("dist"));
app.use(express.json());


app.get(
  "/nearbyEvents/:city/:state/:startDate/:endDate",
  events.getNearbyEvents
);

app.get('/login', login.validate);

app.get('/flights', flights.getFlights);

module.exports = app;
