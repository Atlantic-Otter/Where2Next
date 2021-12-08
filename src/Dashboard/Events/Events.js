import React from "react";
import { useParams } from "react-router-dom";
import getStartAndEndDate from "../../../Helpers/getStartAndEndDate";
function Events() {
  const { startDate, endDate } = getStartAndEndDate();
  const { zip } = useParams();
  console.log(startDate, endDate, zip);
  return <div>Events</div>;
}

export default Events;
