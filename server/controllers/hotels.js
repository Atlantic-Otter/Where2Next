const axios = require('axios')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const headers = {
  'x-rapidapi-host': process.env.HOST,
  'x-rapidapi-key': process.env.API_KEY
}

module.exports = {

  fetchHotels: (req, res) => {
    const { startDate, endDate, city } = req.params;
    const options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
      params: {query: city, locale: 'en_US', currency: 'USD'},
      headers,
    };

    axios.request(options)
      .then((response) => {
      const hotelList = response.data.suggestions[1].entities;
        // destinationId
      res.send(hotelList)
    }).catch((error) => {
      console.error(error);
    });
  },

  listProperties: (destinationId) => {
    const options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/properties/list',
      params: {
        destinationId,
        pageNumber: '1',
        pageSize: '25',
        checkIn: '2022-01-08',
        checkOut: '2022-01-15',
        adults1: '1',
        sortOrder: 'PRICE',
        locale: 'en_US',
        currency: 'USD'
      },
      headers,
    };

    axios.request(options).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }
}