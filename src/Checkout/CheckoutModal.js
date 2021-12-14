import React from 'react';
import TripContext from '../TripContext.js';
import CheckoutTile from './CheckoutTile.js';
import CheckoutForm from './CheckoutForm.js';
import ThankYou from './ThankYou';
import helpers from './helpers.js';

const CheckoutModal = () => {

  const { currentTrip, setCurrentTrip, toggleCheckoutModal } = React.useContext(TripContext);
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget
    if (form.checkValidity()) {
      setCurrentTrip({
        events: [],
        flights: [],
        hotels: []
      });
      setPaid(!paid);
    }

    setValidated(true);
  };


  const {count, total } = helpers.extractTotal(currentTrip);
  const headerCount = count === 1 ? `${count} item in your cart` : `${count} items in your cart`;

  return (
    <div className="modal-background" onClick={toggleCheckoutModal}>
      <div className="checkout-modal-window" onClick={(event) => { event.stopPropagation(); }}>


          <span className="independent-close-button" onClick={toggleCheckoutModal}>&times;</span>


        {paid ? <ThankYou /> :
        <>
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
      </>
      }
      </div>

    </div>
    );
};

export default CheckoutModal;
