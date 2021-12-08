import React from "react";
import useSearchParams from "../../../Helpers/useSearchParams";
function Events() {
  const { startDate, endDate, zip } = useSearchParams();
  console.log(startDate, endDate, zip);
  return <div>Events</div>;
}

export default Events;
