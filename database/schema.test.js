const User = require('./schema.js');

describe('Initial schema tests', function() {
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
});

//   test('users should store itineraries', async function() {

//   });

//   test('should reject users with duplicate usernames', async function() {

//   });

//   test('should reject users with duplicate passwords'. async function() {

//   });

// })