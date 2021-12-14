import React from 'react';

const dateOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: 'numeric',
  minute:'2-digit'
};

const helpers = {

  getInfo: function(infoObj, service) {

    var title, dateTime, price;

    switch (service) {
      case 'event':

        let minPrice = infoObj.priceRanges ? infoObj.priceRanges[0].min.toFixed(2) : "";
        let maxPrice = infoObj.priceRanges ? infoObj.priceRanges[0].max.toFixed(2) : "";
        minPrice = minPrice ? `$${minPrice}` : "This one's on us!";

        title = infoObj.name
        price = maxPrice > minPrice ? `$${maxPrice}` : `${minPrice}`;

        dateTime = new Date(infoObj.dates.start.dateTime).toLocaleString([], dateOptions);

      break;
      case 'flight':
        let segments = infoObj.itineraries[0].segments;
        let departTime = new Date(segments[0].departure.at).toLocaleString([], dateOptions);
        let arriveTime = new Date(segments[segments.length - 1].arrival.at).toLocaleString([], dateOptions);

        title = `${segments[0].departure.iataCode} to ${segments[segments.length - 1].arrival.iataCode}`;
        dateTime = (
          <>
          {/* div for full block-level */}
            <div><b>Depart:</b> &nbsp; {departTime}</div>
            <span><b>Arrive:</b> &nbsp; {arriveTime}</span>
          </>
        );
        price = '$' + infoObj.price.total

      break;
      case 'hotel':
        title = 'Hotels'
        dateTime = 'tbd'
        price = 0;
      break;
    }

    return {title, dateTime, price};
  },


  parsePrice: function(price) {

    if (price.startsWith('$')) {
      return Number(price.slice(1));
    } else if (price === "This one's on us!") {
      return 0;
    } else {
      return Number(price);
    }

  },

  extractTotal: function({ events, flights, hotels }) {
  // get all prices
    var eventPrices = events.map((event) => {
      var { price } = helpers.getInfo(event, 'event');
      return helpers.parsePrice(price);
    });

    var flightPrices = flights.map((flight) => {
      var { price } = helpers.getInfo(flight, 'flight');
      return helpers.parsePrice(price);
    });

    var hotelPrices = hotels.map((hotel) => {
      var { price } = helpers.getInfo(hotel, 'hotel');
      return helpers.parsePrice(price);
    });

    var all = (eventPrices.concat(flightPrices, hotelPrices));
    console.log('all:', all);
    var total = 0;

    for (var count = 0; count < all.length; count++) {
      total += all[count];
    }

    return { count, total: total.toFixed(2) };
  }


};

export default helpers;