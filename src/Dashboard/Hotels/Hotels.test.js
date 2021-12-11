import React from "react";
import { render, screen } from "@testing-library/react";
import Hotels from "./Hotels.js";
import "@testing-library/jest-dom";
import TripContext from "../../TripContext";
import { HashRouter as Router } from "react-router-dom";
const customRender = (ui) => {
  return render(
    <TripContext.Provider
      value={{
        currentTrip: { events: [], hotels: [], flights: [] },
        setCurrentTrip: () => {},
      }}
    >
      <Router>{ui}</Router>
    </TripContext.Provider>
  );
};

describe("Hotel component", function () {
  test("should render component", function () {
    customRender(<Hotels />);
    expect(screen.getByText("city sections")).toBeInTheDocument();
  });
});
