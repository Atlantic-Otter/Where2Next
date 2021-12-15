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
      // string
    // events/flights/hotels being purchased
      // each an array
    // destination city
      // string
    // startDate
      // string
    // endDate
      // string
  addTrips: function(req, res) {
    const required = [
      'username',
      'events',
      'flights',
      'hotels',
      'destinationCity',
      'startDate',
      'endDate'
    ];

    const validRequest = required.every((key) => (
      req.body[key] !== undefined
    ))

    if (!validRequest) {
      res.status(400).send('Missing/incorrect query parameters');
    } else {

      const {username, events, flights, hotels, destinationCity, startDate, endDate} = req.body

      const find = {username: username};
      const add = {
        $push: {
          upcomingTrips: {
            destination: destinationCity,
            dates: `${startDate} - ${endDate}`,
            events: events,
            flights: flights,
            lodging: hotels
          }
        }
      };

      // find the user
      User.findOneAndUpdate(find, add, {new: true})
        .then((updatedUser) => {
          console.log('updated to:', updatedUser);
            // then
            // res 200 with the updated user
            res.status(201).send(updatedUser);

        })
        .catch((err) => {
          console.error(err);
          res.status(404).send('Not found');
        });

      // res.status(200).send('hey world from addToTrips');

    }
  }
};
