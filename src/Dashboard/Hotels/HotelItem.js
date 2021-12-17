import React, { useState, useEffect, useContext } from "react";
import ReactStars from "react-rating-stars-component";
import TripContext from "../../../src/TripContext";

const HotelItem = ({ hotel, tripDuration }) => {
  let [price, setPrice] = useState("Call for Pricing");
  let [rating, setRating] = useState(3.5);
  let [badgeText, setBadgeText] = useState("unavailable");
  let [thumbnail, setThumbnail] = useState("unavailable");
  const abortFetch = new AbortController();
  const { currentTrip, setCurrentTrip, unvisited, setUnvisited } = useContext(TripContext);

  const addHotelToTrip = () => {
    let newUnvisited = unvisited.filter((el) => el !== 'hotels');
    setUnvisited(newUnvisited);
    const newTrip = { ...currentTrip };
    newTrip.hotels.push(hotel);
    setCurrentTrip(newTrip);
  };


  useEffect(() => {
    if (hotel.ratePlan) setPrice(hotel.ratePlan.price.current);
    if (hotel.guestReviews) setRating(Number(hotel.guestReviews.rating));
    if (hotel.guestReviews) setBadgeText(hotel.guestReviews.badgeText);
    if (hotel.optimizedThumbUrls) setThumbnail(hotel.optimizedThumbUrls.srpDesktop);

    return () => abortFetch.abort();
  }, []);

  const tripData = {
    hotelName: hotel.name,
    hotelId: hotel.id,
    dailyRate: price,
    tripDuration: tripDuration,
    startDate: hotel.startDate,
    endDate: hotel.endDate,
  };

  const handleClick = () => {
    const newTrip = { ...currentTrip };
    newTrip.hotels.push(tripData);
    setCurrentTrip(newTrip);
  };

  return (
    <div className="listItem">
      <div className="listDetails">
        <div>
          <img className="hotelListImage" src={thumbnail} />
        </div>
        <div className="hotel-text">
          <h5>{hotel.name}</h5>
          {hotel.address.streetAddress}, {hotel.address.locality}
          {hotel.guestReviews && (
            <div className="hotelRating">
              <ReactStars
                count={5}
                value={Number(hotel.guestReviews.rating) / 2}
                edit={false}
                ifHalf={true}
              />
              &nbsp;&nbsp;{hotel.guestReviews.rating / 2} / 5 {badgeText}
            </div>
          )}
          {hotel.landmarks[1].distance} from {hotel.landmarks[1].label}<br />
          {/* {hotel.landmarks[0].distance} from {hotel.landmarks[0].label} */}
        </div>
        <div className="hotel-detail-price">
          <h5>{price}</h5>
          Total:{" "}
          {"$" + Number(price.split("").splice(1).join("")) * tripDuration }
          <button className="addToTrip" onClick={handleClick}>
            Add to Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelItem;
