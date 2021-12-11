import React from "react";
import ReactStars from "react-rating-stars-component";

const HotelItem = ({ hotel }) => {

  return(
    <div className="eventListItem">

      <div className="eventDetails">
        <img className="eventListImage_" src={hotel.optimizedThumbUrls.srpDesktop} />
        <div className="eventText">
          <h4>{hotel.name}</h4>
          {hotel.address.locality}
          <ReactStars count={5} value={hotel.guestReviews.rating / 2} edit={false} ifHalf={true} />{hotel.guestReviews.rating / 2} / 5 {hotel.guestReviews.badgeText}
        </div>
        <div className="hotel-text">


          <span>{}</span>
          <span>
          {/* <span>Daily Rate: { hotel.ratePlan.price.current }</span> */}

          </span>
        </div>
      </div>
    </div>
  )
};

export default HotelItem;
