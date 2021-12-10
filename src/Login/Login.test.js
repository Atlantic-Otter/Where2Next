import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginButton from './LoginButton.js'
import App from '../App/App.js'
import '@testing-library/jest-dom';

describe('Logging in', function() {
  test('A login button exists on the page', function() {
    render(<App />);
    expect(screen.getByText('Login')).toBeInTheDocument();

  })
})