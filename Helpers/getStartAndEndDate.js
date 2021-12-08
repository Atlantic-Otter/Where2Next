import React from "react";
import { useLocation, useParams } from "react-router-dom";
function getStartAndEndDate() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const startDate = params.get("startDate");
  const endDate = params.get("endDate");
  const { zip } = useParams();

  return { startDate, endDate, zip };
}

export default getStartAndEndDate;
