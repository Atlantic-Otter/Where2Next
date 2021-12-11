import React from "react";
import { render, screen } from "@testing-library/react";
import Hotels from "./Hotels.js";
import "@testing-library/jest-dom";
import TripContext from '../../TripContext';

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

describe("Hotel component", function () {
  test("should render component", function () {
    render(<Hotels />);
    expect(screen.getByText('Hotels')).toBeInTheDocument();
  });
});
