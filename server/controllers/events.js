const axios = require('axios')
const { API_KEY } = require('../../config.js')

const URL = "https://api.predicthq.com/v1/events/?within=10km@37.804363,-122.271111"
const HEADERS = {
      headers: {
        Authorization: API_KEY
      }
    }

module.exports = {

  getNearbyEvents: (req, res) => {
    axios.get(URL, HEADERS )
    .then( d=> console.log(d.data.results))
  }

}