const axios = require("axios");
const { API_KEY } = require("../../config.js");

const URL = `https://app.ticketmaster.com/discovery/v2/events.json?latlong=37.804363,-122.271111&radius=10&unit=miles&apikey=${API_KEY}`;

module.exports = {
  getNearbyEvents: (req, res) => {
    axios.get(URL).then((d) => {
      // console.log(d.data);
      const { events } = d.data._embedded;
      // console.log(events);
      events.forEach((result) => console.log(result._embedded.venues));
    });
  },
};
