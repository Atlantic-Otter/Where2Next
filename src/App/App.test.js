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
  customRender(<App test={true} />);

  expect(screen.getByText("HOME")).toBeInTheDocument();
});
