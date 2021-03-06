import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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
test("Renders the Dashboard Component on the page", async () => {
  customRender(<Dashboard />);
  await waitFor(() =>
    expect(screen.getByText("DASHBOARD")).toBeInTheDocument()
  );
});

test("Clicking 'Your Trip' button renders toast", async () => {
  customRender(<Dashboard />);
  fireEvent.click(screen.getByText("your trip"));
  await waitFor(() => {
    expect(screen.getByText("My Trip")).toBeInTheDocument();
  });
  // expect(screen.getByText("HOME")).toBeInTheDocument();
});
