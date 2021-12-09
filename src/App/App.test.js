import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App.js";
import "@testing-library/jest-dom";
import TripContext from "../TripContext";

const customRender = (ui) => {
  return render(
    <TripContext.Provider
      value={{
        currentTrip: { events: [], hotels: [], flights: [] },
        setCurrentTrip: () => {},
      }}
    >
      {ui}
    </TripContext.Provider>
  );
};
test("Renders the App Component on the page", () => {
  customRender(<App />);

  expect(screen.getByText("HOME")).toBeInTheDocument();
});

test("Clicking 'Your Trip' button renders toast", async () => {
  customRender(<App />);
  fireEvent.click(screen.getByText("Go!"));
  await waitFor(() => {
    screen.getByText("your trip");
  });
  fireEvent.click(screen.getByText("your trip"));

  await waitFor(() => {
    screen.getByText("My Trip");
  });
  // expect(screen.getByText("HOME")).toBeInTheDocument();
});
