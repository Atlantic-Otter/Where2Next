import React, { useState, useEffect } from "react";
import TripContext from "../../../src/TripContext.js";
import { useContext } from "react";
import "./Events.css";
// import "../dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'

function EventListItem({ event, openModal }) {
  const { currentTrip, setCurrentTrip, unvisited, setUnvisited } = useContext(TripContext);
  const [ quantity, setQuantity ] = useState(0);
  const [ added, setAdded ] = useState(false);

  const addEventToTrip = () => {
    if (quantity > 0) {
      const newTrip = { ...currentTrip };
      let eventWithQuantity = {...event, quantity};
      newTrip.events.push(eventWithQuantity);
      setCurrentTrip(newTrip);
      openModal(quantity);
    }
  };

  // console.log(event);

  const date = new Date(event.dates.start.dateTime).toLocaleString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  const chooseImage = (event) => {
    let imgURL = "";
    event.images.forEach((image) => {
      if (image.ratio === "4_3") {
        imgURL = image.url;
      }
    });
    return imgURL;
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const renderAddToCartButton = () => {

    console.log('some:', currentTrip.events.some( e => e.id === event.id))
     setAdded(currentTrip.events.some( e => e.id === event.id))
  };

  useEffect(() => {
    renderAddToCartButton();
  }, [currentTrip]);

  let price = event.priceRanges ?
    `$${((event.priceRanges[0].min + event.priceRanges[0].max) / 2).toFixed(2)}`: "Free";

  return (
    <div className="listItem">
      <h4 className="name">{event.name}</h4>
      <div className="listDetails">
        <img className="eventListImage"
        src={chooseImage(event)}
        />
        <div className="eventText">
          <span>{event._embedded.venues[0].name}</span>
          <span>{event._embedded.venues[0].address.line1}</span>
          <span>{event.distance}mi</span>

          <span>{date}</span>
          <span>{price}</span>
        </div>
        <div className="infoListContainer">
          <div className="quantityPicker">
            <FontAwesomeIcon icon={faMinusCircle} size="2x" onClick={decreaseQuantity} className="quantityBtn"/>
            <span className="quantityIndicator">{quantity}</span>
            <FontAwesomeIcon icon={faPlusCircle} size="2x" onClick={increaseQuantity} className="quantityBtn"/>
          </div>
          <div className="buttonsContainer">
            <a className="readMore" href={event.url} target="_blank">
              <span className="readyMoreText">Read More</span>
            </a>
            {added?
              <button className="addToTripAgain" onClick={addEventToTrip}>
                Add to Cart
              </button>:
              <button className="addToTrip" onClick={addEventToTrip}>
                Add to Cart
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventListItem;
