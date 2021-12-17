const axios = require("axios");
const qs = require("query-string");
const {
  FLIGHT_API_CLIENT_ID,
  FLIGHT_API_CLIENT_SECRET,
} = require("../../config.js");

Controllers = {
  getFlights: async (req, res) => {
    const data = qs.stringify({
      grant_type: "client_credentials",
      client_id: FLIGHT_API_CLIENT_ID,
      client_secret: FLIGHT_API_CLIENT_SECRET,
    });
    const { arrivalCode } = req.params;
    console.log(arrivalCode);
    const getTokenConfig = {
      method: "post",
      url: "https://test.api.amadeus.com/v1/security/oauth2/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    const tokenRes = await axios(getTokenConfig);
    const token = tokenRes.data.access_token;

    const getFlightsConfig = {
      method: "get",
      url: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=JFK&destinationLocationCode=${arrivalCode}&departureDate=2021-12-20&adults=1`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const flightsRes = await axios(getFlightsConfig);
    const flightInfo = await flightsRes.data.data;
    res.status(200).send(flightInfo);
  }
}

module.exports = Controllers;
