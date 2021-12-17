const axios = require("axios");
const qs = require("query-string");
const {
  FLIGHT_API_CLIENT_ID,
  FLIGHT_API_CLIENT_SECRET,
} = require("../../config.js");

Controllers = {
  // getFlights: (req, res) => {
  //   const data = qs.stringify({
  //     grant_type: "client_credentials",
  //     client_id: FLIGHT_API_CLIENT_ID,
  //     client_secret: FLIGHT_API_CLIENT_SECRET,
  //   });
  //   const { arrivalCode } = req.params;
  //   console.log(arrivalCode);
  //   const getTokenConfig = {
  //     method: "post",
  //     url: "https://test.api.amadeus.com/v1/security/oauth2/token",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     data: data,
  //   };

  //   axios(getTokenConfig)
  //     .then((tokenInfo) => {
  //       const token = tokenInfo.data.access_token;
  //       console.log(arrivalCode);
  //       const getFlightsConfig = {
  //         method: "get",
  //         url: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=JFK&destinationLocationCode=${arrivalCode}&departureDate=2021-12-20&adults=1`,
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       };
  //       return axios(getFlightsConfig);
  //     })
  //     .then((flightInfo) => {
  //       const flights = flightInfo.data.data;
  //       res.status(200).send(flights);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       res
  //         .status(500)
  //         .send("Something went wrong when generating an access token");
  //     });
  // },

  getFlights: function(req, res) {
    const data = qs.stringify({
      grant_type: "client_credentials",
      client_id: FLIGHT_API_CLIENT_ID,
      client_secret: FLIGHT_API_CLIENT_SECRET,
    });
    const { arrivalCode } = req.params;
    const getTokenConfig = {
      method: "post",
      url: "https://test.api.amadeus.com/v1/security/oauth2/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    const token = Controllers.getToken(getTokenConfig);
    const getFlightsConfig = {
      method: "get",
      url: `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=JFK&destinationLocationCode=${arrivalCode}&departureDate=2021-12-20&adults=1`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const flightData = Controllers.getFlightData(getFlightsConfig);
    res.status(200).send(flightData);
  },

  getToken: async function(getTokenConfig) {
    // try {
      const token = await axios(getTokenConfig);
      console.log('token:', token);
      console.log('token access token:', token.data.access_token);
      return token.data.access_token;
    // } catch (error) {
    //   console.log(error)
    // }
  },

  getFlightData: async function(getFlightsConfig) {
    // try {
      const flightData = await axios(getFlightsConfig);
      console.log('get flights config:', getFlightsConfig);
      return flightData.data.data;
    // } catch (error) {
    //   console.log(error)
    // }
  }
}

module.exports = Controllers;
