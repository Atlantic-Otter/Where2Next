var Amadeus = require('amadeus');
// require('dotenv').config({ path: '../../../.env' });
require('dotenv').config();

var amadeus = new Amadeus({
  clientId: process.env.API_KEY,
  clientSecret: process.env.API_SECRET,
  hostname: 'test'
});

module.exports = amadeus;