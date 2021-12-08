const mongoose = require('mongoose');
const validateUnique = require('mongoose-unique-validator');
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
    unique: true,
    required: [true, 'username is required']
  },
  password: {
    type: String,
    unique: true,
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

userSchema.plugin(validateUnique);
const User = mongoose.model('User', userSchema);



module.exports = User;
