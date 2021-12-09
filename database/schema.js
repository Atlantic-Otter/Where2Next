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
    type: String,
    default: null
  }
});

// UPDATE: STORING USER SESSION IN LOCAL STORAGE, DB ONLY HOLDS PAID-FOR TRIPS
const userSchema = new mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now()
  },
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


// for dev purposes:
var testDummy = {username: 'testing', password: 'test'};
User.findOne(testDummy)
.then((results) => {
  if (results === null) {
    User.create(testDummy);
  }
})
.catch((err) => {
  console.log('No test dummy - add to your db manually');
  throw err;
});


module.exports = User;
