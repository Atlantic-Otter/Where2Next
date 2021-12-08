import React from "react";
import getStartAndEndDate from "../../../Helpers/getStartAndEndDate";
function Events() {
  const { startDate, endDate, zip } = getStartAndEndDate();
  console.log(startDate, endDate, zip);
  return <div>Events</div>;
}

export default Events;
