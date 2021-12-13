const mongoose = require('mongoose');
const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-shallow-deep-equal'));
chai.use(require('chai-as-promised'));
const User = require('../database/schema.js');


// populate users (array)
const addUsersBefore = function(users) {
  return function(done) {
    User.create([...arguments])
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  };
};

// delete users (array)
const removeUsersAfter = function(usernames) {
  return function(done) {
    // remove all entries
    User.deleteMany({
      username: { $in: usernames }
    })
    .then(() => {
      done();
    })
    .catch((err) => {
      done(err);
    });
  };
};



const userWithoutItinerary = {
  email: 'elliotL@gmail.com',
  username: 'Ellito',
  password: 'Bees'
};

const userWithItinerary = {
  email: 'adamJreact@gmail.com',
  username: 'AdamJ',
  password: 'FieldCouch',
  upcomingTrips: [{
    destination: 'Luxembourg',
    events: [{
      name: 'Really Exciting Event',
      imageURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fphotoshopbattles%2Fcomments%2F1mc892%2Fsilly_dog_face%2F&psig=AOvVaw15wBSThVA7uToQxhjDAOZG&ust=1639175110770000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJikxKPh1_QCFQAAAAAdAAAAABAG',
      startTime: '01-01-2022'
    }]
  }],
  flights: [{
    to: 'CrazyPlace',
    from: 'SanePlace'
  }],
  lodging: 'I am lodging'
};

const duplicateEmail = {
  username: 'newPerson',
  password: 'newPassword',
  email: 'duplicate@gmail.com'
};

const duplicateUsername = {

  username: 'someUser',
  password: 'HiFromSF',
  email: 'egg@gmail.com'

};

const duplicatePassword = {
  username: 'Charles_Arduino_weaponry',
  password: 'memory',
  email: 'stylemaster@gmail.com'
};


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
      expect(results.upcomingTrips.length).to.eql(0);
      expect(results.previousTrips.length).to.eql(0);
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
