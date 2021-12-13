// this modal should grab all items from localStorage and present them to the user to checkout

// upon entering a Credit card and email address and clicking "place your order"
  // localstorage should be cleared
  // the modal should rernder to show a thank you message

import React from 'react';
import TripContext from '../TripContext.js';
import CheckoutTile from './CheckoutTile.js';
import Button from "react-bootstrap/Button";
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
    // var cart = JSON.parse(localStorage.currentTrip);
    // localStorage.setItem('currentTrip', '{}');
    // console.log('localstorage: ', localStorage.currentTrip);


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

            <form id="checkout-form" onSubmit={handleSubmit}>
              <label>
                Credit card:
                <input id="creditCard" type="text" onChange={updateText} />
              </label>
              <label>
                Expiration date
                <input id="expDate" type="text" onChange={updateText} />
              </label>
              <label>
                CVV:
                <input id="cvv" type="text" onChange={updateText} />
              </label>
            </form>

          </div>

          <div id="checkout-bottom">
            <Button onClick={handleSubmit}>
              Checkout
            </Button>

          </div>
      </>
      }
      </div>

    </div>
    );
};

export default CheckoutModal;
