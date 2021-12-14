import React, { useState, useEffect, useContext } from "react";
import ReactStars from "react-rating-stars-component";
import TripContext from "../../../src/TripContext";

const HotelItem = ({ hotel, tripDuration }) => {
  let [price, setPrice] = useState("Call for Pricing");
  let [rating, setRating] = useState(3.5);
  let [badgeText, setBadgeText] = useState("unavailable");
  let [thumbnail, setThumbnail] = useState("unavailable");
  const abortFetch = new AbortController();
  const { currentTrip, setCurrentTrip } = useContext(TripContext);

  useEffect(() => {
    if (hotel.ratePlan.price.current !== undefined)
      setPrice(hotel.ratePlan.price.current);
    if (hotel.guestReviews.rating !== undefined)
      setRating(Number(hotel.guestReviews.rating));
    if (hotel.guestReviews.badgeText !== undefined)
      setBadgeText(hotel.guestReviews.badgeText);
    if (hotel.optimizedThumbUrls.srpDesktop !== undefined)
      setThumbnail(hotel.optimizedThumbUrls.srpDesktop);
    // price = price || '';
    // rating = rating || 3.5;
    // badgeText = badgeText || '';
    // thumbnail = thumbnail || '';
    return () => abortFetch.abort();
  }, []);

  const tripData = {
    hotelName: hotel.name,
    hotelId: hotel.id,
    dailyRate: price,
    tripDuration: tripDuration,
    startDate: hotel.startDate,
    endDate: hotel.endDate
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
          {/* <img className="hotel-detail-img" src={thumbnail} /> */}
          <img className="hotelListImage" src={thumbnail} />
        </div>
        {/* <div className="hotel-detail-desc"> */}
        <div className="hotel-text">
          <h5>{hotel.name}</h5>
          <span>
            <ReactStars
              count={5}
              value={Number(rating)}
              edit={false}
              ifHalf={true}
            />
            {hotel.guestReviews.rating / 2} / 5 {badgeText}
          </span>
          {hotel.landmarks[1].label} {hotel.landmarks[1].distance}
        </div>
        <div className="hotel-detail-price">
          <h5>{price}</h5>
          total:{" "}
          {"$" + Number(price.split("").splice(1).join("")) * tripDuration}
          <button className="addToTrip" onClick={handleClick}>
            Add to Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelItem;
