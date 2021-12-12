import React, {useState, useEffect} from "react";
import ReactStars from "react-rating-stars-component";

const HotelItem = ({ hotel }) => {
  const [price, setPrice] = useState('Call for Pricing')
  const [rating, setRating] = useState(3.5)
  const [badgeText, setBadgeText] = useState('unavailable')
  const [thumbnail, setThumbnail] = useState('unavailable')

  useEffect(() => {
    if (hotel.ratePlan.price.current !== undefined) {
      setPrice(hotel.ratePlan.price.current)
    }
    if (hotel.guestReviews.rating !== undefined) {
      setRating(hotel.guestReviews.rating)
    }
    if (hotel.guestReviews.badgeText !== undefined) {
      setBadgeText(hotel.guestReviews.badgeText)
    }
    if (hotel.optimizedThumbUrls.srpDesktop !== undefined) {
      setThumbnail(hotel.optimizedThumbUrls.srpDesktop)
    }

  }, [])

  return(
    // <div className="eventListItem">
      <div className="hotel-item-detail">
        <div>
          <img className="hotel-detail-img" src={thumbnail} />
        </div>
        <div className="hotel-detail-desc">
          <h4>{hotel.name}</h4>
          <span><ReactStars count={5} value={hotel.guestReviews.rating} edit={false} ifHalf={true} />{hotel.guestReviews.rating / 2} / 5 {badgeText}</span>
          {hotel.landmarks[1].label} {hotel.landmarks[1].distance}
        </div>
        <div className="hotel-detail-price">
          <h3>{price}</h3>

        </div>
      </div>
    // </div>
  )
};

export default HotelItem;

