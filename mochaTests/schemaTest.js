const mongoose = require('mongoose');
const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-shallow-deep-equal'));
chai.use(require('chai-as-promised'));
const User = require('../database/schema.js');

var startedAt = Date.now();
describe('Basic storage', function() {

  it('should store user information', async function() {
    await User.create({
      username: 'Ellito',
      password: 'Bees'
    }).
    then(() => {
      return User.findOne({username: 'Ellito'});
    })
    .then((results) => {
      expect(results.password).to.equal('Bees');

    })
    .catch((err) => {
      console.warn('testing error');
      throw err;
    })
  });

  it('users should store itineraries', async function() {
    await User.create({
      username: 'AdamJ',
      password: 'FieldCouch',
      currentTrip: {
        destination: 'Luxembourg',
        events: ['SchnitzelEssen', 'JazzFestSpielerZusammen 2021'],
        travelPlan: 'Bike there',
        lodging: 'Gemutlich Hotel'
      }
    }).
    then(() => {
      return User.findOne({username: 'AdamJ'});
    })
    .then((results) => {
      expect(results.currentTrip.destination).to.equal('Luxembourg');
    })
    .catch((err) => {
      console.warn('testing error');
      throw err;
    })
  });
});

describe('Handling invalid input', function() {
  after(function() {
    // TODO: add a User.remove(//some function to delete documents added from the test, perhaps add a `created_at: Date.now()` to schema - at end of test call .remove on any documents matching (Date.now() - 3000)
    var endedAt = Date.now();
    User.deleteMany({
      created_at: {$gt: (endedAt - startedAt)}
    })
    .then(() => {
      console.log(`time elapsed: ${endedAt - startedAt}ms`);
      mongoose.connection.close();
    })
    .catch((err) => {
      console.error('Error deleting dummy users from test - please check your local mongosh instance for remnants of test-created documents');
      throw err;
    })


  });


  it('fills missing fields with `null` and empty array values', async function() {
    await User.findOne({username: 'Ellito'})
      .then((results) => {
        expect(results.currentTrip).to.shallowDeepEqual({
          destination: null,
          events: [],
          travelPlan: null,
          lodging: null
        });
        expect(results.previousTrips.length).to.equal(0);
      })
      .catch((err) => {
        console.warn('testing error');
        throw err;
      });
  });

  it('should reject duplicate usernames', function() {
    return expect(
      User.create({
        useraname: 'AdamJ',
        password: 'HiFromSF'
      })).to.eventually.be.rejected;
  });

  it('should reject duplicate passwords', function() {
    return expect(User.create({
      useraname: 'Charles_Arduino_weaponry',
      password: 'Bees'
    })).to.eventually.be.rejected;
  });

  it('should reject insert queries missing the required fields', function() {
    return expect(User.create({})).to.eventually.be.rejected;
    // mongoose.connection.close();
  });

});
