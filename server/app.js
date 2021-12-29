const express = require("express");
const cors = require("cors");
const { events, login, flights, hotels, trips } = require("./controllers");
const app = express();
app.use(cors());

app.use(express.static("dist"));
app.use(express.json());

app.get(
  "/nearbyEvents/:city/:state/:startDate/:endDate",
  events.getNearbyEvents
);

app.get('/login', login.validate);
app.get('/trips', trips.getTrips);
app.post('/trips', trips.addTrips);

app.get("/flights/:arrivalCode", flights.getFlights);

app.get(`/hotels/:city`, hotels.fetchCityGroups);
app.get("/hotels/:city/:destinationId", hotels.fetchHotels);
app.get("/hotels/city/:destinationId/photos", hotels.fetchPhotos);
app.get("/hotels/city/:destinationId/propertyDetail", hotels.fetchDetail);

module.exports = app;
