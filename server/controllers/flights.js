const axios = require("axios");
const qs = require("query-string");
const { API_CLIENT_ID, API_CLIENT_SECRET } = require("../../config.js");

module.exports = {
  getToken: (req, res) => {
    const data = qs.stringify({
      'grant_type': 'client_credentials',
      'client_id': API_CLIENT_ID,
      'client_secret': API_CLIENT_SECRET
    });

    const config = {
      method: 'post',
      url: 'https://test.api.amadeus.com/v1/security/oauth2/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };

    axios(config)
      .then((tokenInfo) => {
        const token = tokenInfo.data.access_token
        res.status(200).send(token);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send('Something went wrong when generating an access token')
      })
  },
};