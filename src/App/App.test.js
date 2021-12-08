import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App.js";
import "@testing-library/jest-dom";
test("Renders the App Component on the page", () => {
  render(<App />);

  expect(screen.getByText("HOME")).toBeInTheDocument();
});
