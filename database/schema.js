const mongoose = require('mongoose');
const validateUnique = require('mongoose-unique-validator');
// connect to local instance
require('./connect.js');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  startTime: {
    type: String,
  }

});

const flightSchema = new mongoose.Schema({
  to: String,
  from:  String,
});

const hotelSchema = new mongoose.Schema({
  name: {type: String},
  tripLength: {type: Number},
})

const itinerarySchema = new mongoose.Schema({
  destination: {
    type: String,
    default: null
  },
  events: {
    type: [eventSchema],
    default: []
  },
  flights: {
    type: [flightSchema],
    default: null
  },
  lodging: {
    type: [hotelSchema],
    default: null
  }
});

// UPDATE: STORING USER SESSION IN LOCAL STORAGE, DB ONLY HOLDS PAID-FOR TRIPS
const userSchema = new mongoose.Schema({
  created_at: {
    type: Number,
    default: Date.now()
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'username is required']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'email is required']
  },
  password: {
    type: String,
    unique: true,
    required: [true, 'password is required']
  },
  upcomingTrips: {
    type: [itinerarySchema],
    default: []
  },
  previousTrips: {
    type: [itinerarySchema],
    default: []
  }
});

userSchema.plugin(validateUnique);
const User = mongoose.model('User', userSchema);




module.exports = User;
