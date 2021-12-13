const mongoose = require('mongoose');
const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-shallow-deep-equal'));
chai.use(require('chai-as-promised'));
const User = require('../database/schema.js');
const {
  duplicatePassword,
  duplicateUsername,
  duplicateEmail,
  userWithItinerary,
  userWithoutItinerary
} = require('./testDummies.js');


describe('Basic storage', function() {
  before(function (done) {
    // add userWith and userWithout
    User.create([userWithItinerary, userWithoutItinerary])
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  after(function(done) {
    // remove all entries
    User.deleteMany({
      username: { $in: ['AdamJ', 'Ellito']}
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  });


  it('should store user information', function(done) {
    User.create().
    then(() => {
      return User.findOne({username: 'Ellito'});
    })
    .then((results) => {
      expect(results.password).to.equal('Bees');
      done();
    })
    .catch((err) => {
      console.warn('testing error:');
      console.warn(err);
      done(err);
    });
  });


  it('users should store itineraries', function(done) {
    User.create().
    then(() => {
      return User.findOne({username: 'AdamJ'});
    })
    .then((results) => {
      expect(results.upcomingTrips[0].destination).to.equal('Luxembourg');
      done();
    })
    .catch((err) => {
      console.warn('testing error');
      console.warn(err);
      done(err);
    });
  });
});


describe.only('Handling invalid/incomplete input', function() {
  before(function (done) {
    // add userWith and userWithout
    User.create([userWithoutItinerary, duplicateEmail, duplicatePassword, duplicateUsername])
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log('asdfasdfasdfasdfasdf');
      done(err);
    });
  });

  after(function(done) {
    // remove all entries
    User.deleteMany({
      username: { $in: ['Ellito', 'newPerson', 'someUser', 'Charles_Arduino_weaponry']}
    })
    .then(() => {
      mongoose.connection.close();
      done();
    })
    .catch((err) => {
      mongoose.connection.close();
      done(err);
    });
  });


  it('fills missing fields with `null` and empty array values', function(done) {
    User.findOne(userWithoutItinerary)
    .then((results) => {
      expect(results.upcomingTrips.length).to.equal(0);
      expect(results.previousTrips.length).to.equal(0);
      done();
    })
    .catch((err) => {
      console.warn('testing error');
      console.warn(err);
      done(err);
    });
  });

  it('should reject duplicate usernames', function() {
    return expect(User.create(duplicateUsername)).to.eventually.be.rejected;
  });

  it('should reject duplicate passwords', function() {
    return expect(
      User.create(duplicatePassword)).to.eventually.be.rejected;
  });

  it('should reject duplicate emails', function() {
    return expect(User.create(duplicateEmail)).to.eventually.be.rejected;
  })

  it('should reject insert queries missing the required fields', function() {
    return expect(User.create({})).to.eventually.be.rejected;

  });

});



// throws errors for some reason

// const addUsersBefore = function(users) {
//   return function(done) {
//     User.create([...arguments])
//     .then(() => {
//       done();
//     })
//     .catch((err) => {
//       done(err);
//     });
//   };
// };

// const removeUsersAfter = function(usernames) {
//   return function(done) {
//     // remove all entries
//     User.deleteMany({
//       username: { $in: usernames }
//     })
//     .then(() => {
//       done();
//     })
//     .catch((err) => {
//       done(err);
//     });
//   };
// };

