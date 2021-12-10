import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage.js";
import "@testing-library/jest-dom";
import { HashRouter as Router, MemoryRouter } from "react-router-dom";

const customRender = (ui) => {
  return render(<Router>{ui}</Router>);
};
test("Renders the App Component on the page", () => {
  customRender(<LandingPage test={true} />);

  expect(screen.getByText("HOME")).toBeInTheDocument();
});
