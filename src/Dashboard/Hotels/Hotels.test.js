import React from "react";
import { render, screen } from "@testing-library/react";
import Hotels from "./Hotels.js";
import "@testing-library/jest-dom";

describe("Hotel component", function () {
  test("should render component", function () {
    render(<Hotels />);
    expect(screen.getByText('Htels')).toBeInTheDocument();
  });
});
