const mongoose = require('mongoose');
// connect to local instance
require('./connect.js');

const itinerarySchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true,
    default: null
  },
  events: {
    type: [String],
    required: true,
    default: []
  },
  travelPlan: {
    type: String,
    required: true,
    default: null
  },
  lodging: {
    type: String,
    required: true,
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
    required: true,
    default: null
  },
  previousTrips: {
    type: [itinerarySchema],
    required: true,
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
.catch(() => {
  console.log('error creating document');
})

module.exports = {
  "User": User,
  "Itinerary": Itinerary,
};
