const User = require('../../database/schema.js');

module.exports = {

  // req query params needs:
    // username
  getTrips: function(req, res) {
    // find the user
      // then
      // get the upcoming and past trips for that user
        // then
        // res 200 with those trips

    // res.status(200).send('hey world from getTrips');

  },

  // req body needs:
    // username
    // events/flights/hotels being purchased
    // destination city
    // trip duration
  addTrips: function(req, res) {
    const {username, events, flights, hotels, destinationCity, duration} = req.body
    const required = [
      'username',
      'events',
      'flights',
      'hotels',
      'destinationCity',
      'duration'
    ];

    const validRequest = required.every((key) => (
      req.body[key] !== undefined
    ))

    if (!validRequest) {
      res.status(400).send('Missing query parameters');
    } else {
      // find the user
        // then
        // add a new itinerary with given info to that user's upcoming trips
          // then
          // res 200

      res.status(200).send('hey world from addToTrips');

    }
  }
};
