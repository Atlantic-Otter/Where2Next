import React from "react";
import TripContext from "../../../src/TripContext.js";
import { useContext } from "react";
import styles from "./Events.css";

function EventListItem({ event, openModal }) {
  const { currentTrip, setCurrentTrip } = useContext(TripContext);

  const addEventToTrip = () => {
    const newTrip = { ...currentTrip };
    newTrip.events.push(event);
    setCurrentTrip(newTrip);

    openModal();
  };

  console.log(event);

  const date = new Date(event.dates.start.dateTime).toLocaleString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  const chooseImage = (event) => {
    let imgURL = '';
    event.images.forEach((image) => {
      if (image.ratio === '4_3') {
        imgURL = image.url;
      }
    })
    return imgURL;
  }

  let minPrice = event.priceRanges ? event.priceRanges[0].min.toFixed(2) : "";
  let maxPrice = event.priceRanges ? event.priceRanges[0].max.toFixed(2) : "";
  minPrice = minPrice ? `$${minPrice}` : "No price listed";
  const price =
    maxPrice > minPrice ? `From ${minPrice} to $${maxPrice}` : `${minPrice}`;

  return (
    <div className="eventListItem">
      <h4 className="name">{event.name}</h4>
      <div className="eventDetails">
        <img className="eventListImage" src={chooseImage(event)} />
        <div className="eventText">
          {/* {event.classifications[0].genre.name !== undefined &&
          <span>{event.classifications[0].genre.name}</span>} */}
          <span>{event._embedded.venues[0].name}</span>
          <span>{event._embedded.venues[0].address.line1}</span>

          <span>{date}</span>
          <span>{price}</span>
        </div>
        <div className="infoListContainer">
          <div className="buttonsContainer">
            <a className="readMore" href={event.url} target="_blank">
              <span className="readyMoreText">Read More</span>
            </a>
            <button className="addToTrip" onClick={addEventToTrip}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventListItem;
