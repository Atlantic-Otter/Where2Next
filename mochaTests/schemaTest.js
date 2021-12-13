const mongoose = require("mongoose");
const chai = require("chai");
const { expect } = chai;
<<<<<<< HEAD
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
=======
chai.use(require("chai-shallow-deep-equal"));
chai.use(require("chai-as-promised"));
const User = require("../database/schema.js");

var startedAt;
describe("Basic storage", function () {
  before(() => {
    startedAt = Date.now();
  });

  it("should store user information", async function () {
    await User.create({
      email: "elliotL@gmail.com",
      username: "Ellito",
      password: "Bees",
    })
      .then(() => {
        return User.findOne({ username: "Ellito" });
      })
      .then((results) => {
        expect(results.password).to.equal("Bees");
      })
      .catch((err) => {
        console.warn("testing error");
        throw err;
      });
  });

  // UPDATE TO REFLECT SCHEMA CHANGES
  it("users should store itineraries", async function () {
    await User.create({
      email: "adamJreact@gmail.com",
      username: "AdamJ",
      password: "FieldCouch",
      upcomingTrips: [
        {
          destination: "Luxembourg",
          events: [
            {
              name: "Really Exciting Event",
              imageURL:
                "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2Fphotoshopbattles%2Fcomments%2F1mc892%2Fsilly_dog_face%2F&psig=AOvVaw15wBSThVA7uToQxhjDAOZG&ust=1639175110770000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJikxKPh1_QCFQAAAAAdAAAAABAG",
              startTime: "01-01-2022",
            },
          ],
        },
      ],
      flights: [
        {
          to: "CrazyPlace",
          from: "SanePlace",
        },
      ],
      lodging: "I am lodging",
    })
      .then(() => {
        return User.findOne({ username: "AdamJ" });
      })
      .then((results) => {
        expect(results.upcomingTrips[0].destination).to.equal("Luxembourg");
      })
      .catch((err) => {
        console.warn("testing error");
        throw err;
      });
  });
});

describe("Handling invalid input", function () {
  after(function () {
    var endedAt = Date.now();
    console.log("ended at:", endedAt);
    console.log("started at:", startedAt);
    User.deleteMany({
      created_at: { $gte: startedAt - 100 },
    })
      .then(() => {
        console.log("Removed db entries added during test");
        console.log(`Time elapsed: ${endedAt - startedAt}ms`);
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error(
          "Error deleting dummy users from test - please check your local mongosh instance for remnants of test-created documents"
        );
        throw err;
      });
  });

  it("fills missing fields with `null` and empty array values", async function () {
    await User.findOne({ username: "Ellito" })
      .then((results) => {
        expect(results.upcomingTrips.length).to.equal(0);
        expect(results.previousTrips.length).to.equal(0);
      })
      .catch((err) => {
        console.warn("testing error");
        throw err;
      });
  });

  it("should reject duplicate usernames", function () {
    return expect(
      User.create({
        useraname: "AdamJ",
        password: "HiFromSF",
        email: "egg@gmail.com",
      })
    ).to.eventually.be.rejected;
  });

  it("should reject duplicate passwords", function () {
    return expect(
      User.create({
        useraname: "Charles_Arduino_weaponry",
        password: "Bees",
      })
    ).to.eventually.be.rejected;
  });

  it("should reject duplicate emails", function () {
    return expect(
      User.create({
        username: "newPerson",
        password: "newPassword",
        email: "elliotL@gmail.com",
      })
    ).to.eventually.be.rejected;
  });
>>>>>>> 9be15147a7e4010210448d30145edb0dc2507b23

  it("should reject insert queries missing the required fields", function () {
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

