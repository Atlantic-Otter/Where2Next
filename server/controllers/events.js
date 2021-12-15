const axios = require("axios");
const { EVENT_API_KEY } = require("../../config.js");
const zipcodes = require("zipcodes");
module.exports = {
  getNearbyEvents: (req, res) => {
    const { city, state, startDate, endDate } = req.params;
    const { latitude, longitude } = zipcodes.lookupByName(city, state)[0];
    const start = new Date(startDate).toISOString().slice(0, -5) + "Z";
    const end = new Date(endDate).toISOString().slice(0, -5) + "Z";

    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?latlong=${latitude},${longitude}&startDateTime=${start}&endDateTime=${end}&radius=30&unit=miles&apikey=${EVENT_API_KEY}&size=100&sort=date,asc`
      )
      .then((d) => {
        const events = d.data._embedded ? d.data._embedded.events : [];
        res.status(200).send(events);
      })
      .catch((e) => console.log(e));
  },
};
