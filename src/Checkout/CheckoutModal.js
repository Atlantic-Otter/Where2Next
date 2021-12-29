import React from 'react';
import TripContext from '../TripContext.js';
import UserContext from '../UserContext.js';
import CheckoutTile from './CheckoutTile.js';
import CheckoutForm from './CheckoutForm.js';
import ThankYou from './ThankYou';
import useSearchParams from '../../Helpers/useSearchParams.js';
import helpers from './helpers.js';

const CheckoutModal = ({ toggleLoginModal }) => {

  const { currentTrip, setCurrentTrip, toggleCheckoutModal } = React.useContext(TripContext);
  const { user, setUser } = React.useContext(UserContext);
  const  { startDate, endDate, city, state } = useSearchParams();

  const { events, flights, hotels } = JSON.parse(window.localStorage.currentTrip);
  const [text, setText] = React.useState({
    creditCard: '',
    expDate: '',
    cvv: ''
  });

  const updateText = (event) => {
    var stateKey = event.target.id;
    var newState = {...text};
    newState[stateKey] = event.target.value;
    setText(newState);
  };

  const [validated, setValidated] = React.useState(false);
  const [paid, setPaid] = React.useState(false);

  const getTitles = (serviceArrayName, serviceName) => {
    return currentTrip[serviceArrayName].map((item) => {
      var {title} = helpers.getInfo(item, serviceName);
      return title;
    });
  };

  const updateUserDataAndPay = () => {
    //C: what happens on checkout?
          // always need to be updated on purchased trips
    //   need to be signed in (we want users to have access to their bookings on-site)


    //A. Put together states and order of operations
      // user
      // validated
      // paid

      // 1. prompt sign in if not already
      // 2. on next checkout-attempt get user state
      // 3. transfer localstorage to user's slot in db
      // 4. send back the updated info
      // 5. re-set the user state so it's reflected in profile
      // 6. set paid state to true so we can thank the user on the next page

      // after all goes thru, make another post request

    // R. Pretty seamless checkout experience and the info is always reflected in profile

    // get whatever's in localstorage
    // post request it to be added to user profile

      // on success, clear localstorage
    // setPaid

    const username = user.username;
    const destination = `${city}, ${state}`;
    const tripItemTitles = {
      events: getTitles('events', 'event'),
      flights: getTitles('flights', 'flight'),
      hotels: getTitles('hotels', 'hotel')
    };

    helpers.addTrip(username, startDate, endDate, destination, tripItemTitles)
      .then(({ data }) => {
        // clear localstorage
        setCurrentTrip({
          events: [],
          flights: [],
          hotels: []
        });
        setPaid(!paid);
        setUser(data);

      })
      .catch((err) => {
        console.error(err);
      });

  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget
    if (form.checkValidity()) {

      if (user) {
        updateUserDataAndPay();
      } else {
        toggleLoginModal();
      }
    }

    setValidated(true);
  };


  const {count, total } = helpers.extractTotal(currentTrip);
  const headerCount = count === 1 ? `${count} item in your cart` : `${count} items in your cart`;

  // var searchParams = useSearchParams();

  return (
    <div className="modal-background" onClick={toggleCheckoutModal}>


      {paid ? <ThankYou toggleCheckoutModal={toggleCheckoutModal}/> :

        <div className="checkout-modal-window" onClick={(event) => { event.stopPropagation(); }}>

          <span className="independent-close-button" onClick={toggleCheckoutModal}>&times;</span>
          <div id="checkout-header">
            <h2>{headerCount}</h2>
          </div>
          <div id="checkout-top">
            <div id="checkout-rundown-container">
              <div id="checkout-categories">
                <div className="given-category">
                  <h3>Events:</h3>
                  {events.map((event, i) =>
                    <CheckoutTile key={i} service="event" infoObj={event}/>
                  )}
                </div>

                <div className="given-category">
                  <h3>Flights:</h3>
                  {flights.map((flight, i) =>
                    <CheckoutTile key={i} service="flight" infoObj={flight} />
                  )}
                </div>

                <div className="given-category">
                  <h3>Hotels:</h3>
                  {hotels.map((hotel, i) =>
                    <CheckoutTile key={i} service="hotel" infoObj={hotel} />
                  )}
                </div>

              </div>
              <h3 id="checkout-total">
                Total: ${total}
              </h3>
            </div>
            <CheckoutForm
              handleSubmit={handleSubmit}
              updateText={updateText}
              validated={validated}
              />
          </div>
      </div>
        }
    </div>

    );
};

export default CheckoutModal;
