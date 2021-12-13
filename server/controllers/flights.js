const axios = require("axios");
const qs = require("query-string");
const {
  FLIGHT_API_CLIENT_ID,
  FLIGHT_API_CLIENT_SECRET,
} = require("../../config.js");

module.exports = {
  getFlights: (req, res) => {
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

    axios(getTokenConfig)
      .then((tokenInfo) => {
        const token = tokenInfo.data.access_token;
        console.log(arrivalCode);
        const getFlightsConfig = {
          method: "get",
          url: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=JFK&destinationLocationCode=${arrivalCode}&departureDate=2021-12-20&adults=1`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        return axios(getFlightsConfig);
      })
      .then((flightInfo) => {
        const flights = flightInfo.data.data;
        res.status(200).send(flights);
      })
      .catch((error) => {
        console.log(error);
        res
          .status(500)
          .send("Something went wrong when generating an access token");
      });
  },
};
