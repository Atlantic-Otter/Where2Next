import React from "react";
import { render, screen } from "@testing-library/react";
import Hotels from "./Hotels.js";
import HotelGroup from "./HotelGroup";
import CityGroup from "./CityGroup";
import "@testing-library/jest-dom";
import TripContext from "../../TripContext";
import { HashRouter as Router } from "react-router-dom";
import { cityData, neighborhood } from './mocks/testData';
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
    expect(screen.getByTestId("hotelComponent")).toBeInTheDocument();
  });
  test("should render neighborhood options", function () {
    customRender(<Hotels />);
    expect(screen.getByText(/nice/gi)).toBeInTheDocument();
  });
  // test("should render hotel list", function () {
  //   customRender(<Hotels />);
  //   expect(screen.getByTestId("scrollContainer")).toBeInTheDocument();
  // });
});

// describe("Neighborhood Component", () => {
//   customRender(<CityGroup data={neighborhood} setHotelList={() => {}}/>);
//   test("should display neighborhoods", () => {
//     expect(screen.dataTestId("neighborhoods"))
//   })
// })