
var util = require('util');
var encoder = new util.TextEncoder('utf-8');
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
  username: 'Ellito',
  password: 'Bees'
}).
then(() => {
  return User.findOne({username: 'Ellito'});
})
.then((results) => {
  console.log('got back from query:', results);
})
.catch((err) => {
  console.log('error');
})




module.exports = User;
