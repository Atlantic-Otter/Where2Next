import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard.js";
import "@testing-library/jest-dom";
import { HashRouter as Router, MemoryRouter } from "react-router-dom";
import TripContext from "../TripContext";
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
test("Renders the App Component on the page", () => {
  customRender(<Dashboard />);

  expect(screen.getByText("DASHBOARD")).toBeInTheDocument();
});
