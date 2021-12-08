const mongoose = require('mongoose');
// connect to local instance
require('./connect.js');

const itinerarySchema = new mongoose.Schema({
  destination: {
    type: String,

    default: null
  },
  events: {
    type: [String],

    default: []
  },
  travelPlan: {
    type: String,

    default: null
  },
  lodging: {
    type: String,

    default: null
  }

});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'username is required']
  },
  password: {
    type: String,
    required: [true, 'password is required']
  },
  currentTrip: {
    type: itinerarySchema,

    default: {}
  },
  previousTrips: {
    type: [itinerarySchema],

    default: []
  }
});

const User = mongoose.model('User', userSchema);


User.create({
  username: 'emptyField',
  password: 'allMissingFields',
})
.then(() => {
  console.log('created document!');
})
.catch((err) => {
  console.log('error creating document');
  throw err;
})

module.exports = {
  "User": User,
  "Itinerary": Itinerary,
};
