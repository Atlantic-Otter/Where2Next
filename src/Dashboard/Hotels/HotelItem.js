import React, {useState, useEffect, useContext} from "react";
import ReactStars from "react-rating-stars-component";
import TripContext from "../../../src/TripContext";

const HotelItem = ({ hotel, tripDuration }) => {
  const [price, setPrice] = useState('Call for Pricing')
  const [rating, setRating] = useState(3.5)
  const [badgeText, setBadgeText] = useState('unavailable')
  const [thumbnail, setThumbnail] = useState('unavailable')

  const { currentTrip, setCurrentTrip } = useContext(TripContext);

  useEffect(() => {
    if (hotel.ratePlan.price.current !== undefined) setPrice(hotel.ratePlan.price.current)
    if (hotel.guestReviews.rating !== undefined) setRating(hotel.guestReviews.rating)
    if (hotel.guestReviews.badgeText !== undefined) setBadgeText(hotel.guestReviews.badgeText)
    if (hotel.optimizedThumbUrls.srpDesktop !== undefined) setThumbnail(hotel.optimizedThumbUrls.srpDesktop)
    // price = price || '';
    // rating = rating || '';
    // badgeText = badgeText || '';
    // thumbnail = thumbnail || '';

  }, [])

  const addToCart = () => {
    const newTrip = { ...currentTrip };
  }

  return(
    // <div className="eventListItem">
      <div className="hotel-item-detail">
        <div>
          <img className="hotel-detail-img" src={thumbnail} />
        </div>
        <div className="hotel-detail-desc">
          <h5>{hotel.name}</h5>
          <span><ReactStars count={5} value={Number(rating)} edit={false} ifHalf={true} />{hotel.guestReviews.rating / 2} / 5 {badgeText}</span>
          {hotel.landmarks[1].label} {hotel.landmarks[1].distance}
        </div>
        <div className="hotel-detail-price">
          <h5>{price}</h5>
          <div>Add to Cart</div>
          total: {'$'+Number(price.split('').splice(1).join('')) * tripDuration}

        </div>
      </div>
    // </div>
  )
};

export default HotelItem;

