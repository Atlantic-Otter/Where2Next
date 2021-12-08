const mongoose = require('mongoose');
const User = require('./schema.js');

describe('Initial schema tests', function() {
  afterAll(function() {
    // TODO: add a User.remove(//some function to delete documents added from the test, perhaps add a `created_at: Date.now()` to schema - at end of test call .remove on any documents matching (Date.now() - 3000)
    mongoose.connection.close();
  });

  test('should store user information', async function() {
    await User.create({
      username: 'Ellito',
      password: 'Bees'
    }).
    then(() => {
      return User.findOne({username: 'Ellito'});
    })
    .then((results) => {
      expect(results.password).toBe('Bees');

    })
    .catch((err) => {
      console.warn('testing error');
      throw err;
    })
  });

  test('users should store itineraries', async function() {
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
      expect(results.currentTrip.destination).toBe('Luxembourg');
    })
    .catch((err) => {
      console.warn('testing error');
      throw err;
    })
  });

  test('creating a documentwith missing fields should use `null` and empty array values', async function() {
    await User.findOne({username: 'Ellito'})
      .then((results) => {
        expect(results.currentTrip).toMatchObject({
          destination: null,
          events: [],
          travelPlan: null,
          lodging: null
        });
        expect(results.previousTrips).toEqual([]);
      })
      .catch((err) => {
        console.warn('testing error');
        throw err;
      });
  });

  test('should reject duplicate usernames', async function() {
    await expect(User.create({
      useraname: 'AdamJ',
      password: 'HiFromSF'
    })).rejects.toThrow('User validation failed:');
  });

  test('should reject duplicate passwords', async function() {
    await expect(User.create({
      useraname: 'Charles_Arduino_weaponry',
      password: 'Bees'
    })).rejects.toThrow('User validation failed');
  });

  test('should reject insert queries missing the required fields', async function() {
    await expect(User.create({})).rejects.toThrow('username is required');
  })
});



