const axios = require('axios')
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const headers = {
  'x-rapidapi-host': process.env.HOST,
  'x-rapidapi-key': process.env.API_KEY
}

module.exports = {

  fetchCityGroups: (req, res) => {
    const { city, state } = req.params;
    const options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
      params: {query: city, locale: 'en_US', currency: 'USD'},
      headers,
    };

    axios.request(options)
      .then((response) => {
      const segments = response.data.suggestions[0].entities;
      const cityGroups = segments.filter(item => item.type === 'NEIGHBORHOOD')
      res.send(cityGroups)
    }).catch((error) => {
      console.error(error);
    });
  },

  fetchHotels: (req, res) => {
    const { destinationId } = req.params;
    const options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/properties/list',
      params: {
        destinationId,
        pageNumber: '1',
        pageSize: '25',
        // checkIn: startDate,
        // checkOut: endDate,
        adults1: '1',
        sortOrder: 'PRICE',
        locale: 'en_US',
        currency: 'USD'
      },
      headers,
    };

    axios.request(options).then((response) => {
      const hotelList = response.data.data.body.searchResults.results
      const neighborhoodName = response.data.data.body.header
      res.send(hotelList)
    }).catch((error) => {
      console.error(error);
    });
  },

  fetchPhotos: (destinationId) => {
    var options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/properties/get-hotel-photos',
      params: {id: destinationId},
      headers
    };

    axios.request(options).then((response) => {
      // console.log(response.data);
      res.send(response.data);
    }).catch((error) => {
      console.error(error);
    });
  },

  fetchDetail: (destinationId) => {
    // const { startDate, endData } = req.params;
    var options = {
      method: 'GET',
      url: 'https://hotels4.p.rapidapi.com/properties/get-details',
      params: {
        // id: '424023',
        id: destinationId,
        checkIn: startDate,
        checkOut: endDate,
        adults1: '1',
        currency: 'USD',
        locale: 'en_US'
      },
      headers,
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  },

}