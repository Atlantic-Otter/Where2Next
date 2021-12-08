const amadeus = require('./index.js');

const testCalls = {

  fetchHotelByCity: (cityCode) => {
    amadeus.shopping.hotelOffersByHotel.get({ cityCode })
  },

  fetchHotelByCityId: (hotelId) => {
    amadeus.shopping.hotelOffersByHotel.get({ hotelId })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  },

  bookHotel: () => {
    amadeus.booking.hotelBookings.post(
      JSON.stringify({
        'offerId': 'XXX',
        'guests': [],
        'payments': []
        }
      )
    )
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  },

  checkFlight: () => {
    amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'SYD',
    destinationLocationCode: 'BKK',
    departureDate: '2021-12-11',
    adults: '1'
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  },

  fetchHotelRating: (hotelId) => {
    amadeus.eReputation.hotelSentiments.get({ hotelIds })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  },

}

// testCalls.fetchHotel('XKPARC12')
testCalls.checkFlight()