const express = require("express")
const { events } = require('./controllers/');
const app = express();


events.getNearbyEvents()
app.get('/nearbyEvents', events.getNearbyEvents)



module.exports = app;


