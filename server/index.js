const app = require('./app.js')
const PORT = 3000;
const User = require('../database/schema.js');

app.listen(PORT, () => {
  console.log(`Where2Next listening on ${PORT}`)
});


// makes sure we have a test dummy each time the server starts
const testDummy = {
  username: 'testing',
  password: 'test',
  email: 'test@testing.com'
};

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

