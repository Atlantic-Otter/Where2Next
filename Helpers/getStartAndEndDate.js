import React from "react";
import { useLocation } from "react-router-dom";
function getStartAndEndDate() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const result = {};
  result.startDate = params.get("startDate");
  result.endDate = params.get("endDate");
  return result;
}

export default getStartAndEndDate;
