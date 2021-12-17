import React from 'react';

const ThankYou = ({ toggleCheckoutModal }) => {
  return(
    <div className="thank-you-modal" onClick={(event) => { event.stopPropagation(); }}>
      <span className="independent-close-button" onClick={toggleCheckoutModal}>&times;</span>

      <div id="thank-you">
        <p id="celebrate">
          Woohoo! Your trip is booked!
        </p>
        <p>Expect a confirmation email with details shortly.</p>
      </div>
    </div>
  )
};

export default ThankYou;