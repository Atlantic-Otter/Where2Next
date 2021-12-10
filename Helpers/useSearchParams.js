import React from "react";
import { useLocation, useParams } from "react-router-dom";
function useSearchParams() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const startDate = params.get("startDate");
  const endDate = params.get("endDate");
  const city = params.get("city");
  const state = params.get("state");

  return { startDate, endDate, city, state };
}

export default useSearchParams;
