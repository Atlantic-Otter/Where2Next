import React from 'react';
import TripContext from '../TripContext.js';
import CheckoutTile from './CheckoutTile.js';
import CheckoutForm from './CheckoutForm.js';
import ThankYou from './ThankYou';

const CheckoutModal = () => {

  const { currentTrip, setCurrentTrip, toggleCheckoutModal } = React.useContext(TripContext);
  const { events, flights, hotels } = JSON.parse(window.localStorage.currentTrip);
  const [text, setText] = React.useState({
    creditCard: '',
    expDate: '',
    cvv: ''
  });

  const [paid, setPaid] = React.useState(false);

  const updateText = (event) => {
    var stateKey = event.target.id;
    var newState = {...text};
    newState[stateKey] = event.target.value;
    setText(newState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentTrip({
      events: [],
      flights: [],
      hotels: []
    });

    setPaid(!paid);
  };

  return (

    <div className="modal-background" onClick={toggleCheckoutModal}>
      <div className="checkout-modal-window" onClick={(event) => { event.stopPropagation(); }}>
        <span className="independent-close-button" onClick={toggleCheckoutModal}>&times;</span>
        {paid ? <ThankYou /> :
        <>
          <div id="checkout-top">
            <div id="checkout-categories">
              <h3>Events:</h3>
              {events.map((event, i) =>
                <CheckoutTile key={i} service="event" infoObj={event} />
              )}

              <h3>Flights:</h3>
              {flights.map((flight, i) =>
                <CheckoutTile key={i} service="flight" infoObj={flight} />
              )}

              <h3>Hotels:</h3>
              {hotels.map((hotel, i) =>
                <CheckoutTile key={i} service="hotel" infoObj={hotel} />
              )}

            </div>

            <CheckoutForm handleSubmit={handleSubmit}/>
          </div>
      </>
      }
      </div>

    </div>
    );
};

export default CheckoutModal;
