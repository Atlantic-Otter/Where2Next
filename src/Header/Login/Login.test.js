import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import App from "../../App/App.js";
import Header from "./Header.js";
import "@testing-library/jest-dom";
// runs the file to produce a test dummy in case it's not there
// require('../../database/schema.js');

describe("Signing in", function () {
  test("A sign-in button exists on the page", function () {
    render(<App />);
    expect(screen.getByText("Sign in")).toBeInTheDocument();
  });

  test("Clicking the login button renders a modal", function() {
    // render(<Header />);
    render(<App />);
    fireEvent.click(screen.getByText("Sign in"));
    expect(screen.getByText("Username:")).toBeInTheDocument();

  });

  test('Logging in with a correct username and password logs the user in', async function() {
    render(<App />);
    fireEvent.click(screen.getByText("Sign in"));

    const usernameinput = screen.getByLabelText('Username:');
    const passwordInput = screen.getByLabelText('Password:');
    userEvent.type(usernameinput, 'testing');
    userEvent.type(passwordInput, 'test');
    userEvent.click(screen.getByTestId('login-button'));
    await waitFor(() => {
      expect(screen.getByTestId("current-user").innerHTML).toBe('testing');
    });
  })

});
