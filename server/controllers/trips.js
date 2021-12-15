module.exports = {
  getTrips: function(req, res) {
    res.status(200).send('hey world from getTrips');

  },

  addTrips: function(req, res) {
    res.status(200).send('hey world from addToTrips');
  }
};
