const express = require("express");
const cors = require("cors");
const { events } = require("./controllers");
const app = express();
app.use(cors());

app.get("/nearbyEvents/:zip/:startDate/:endDate", events.getNearbyEvents);

module.exports = app;
