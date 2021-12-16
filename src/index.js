import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App/App.js";

if (process.env.NODE_ENV === 'development') {
  require('./Dashboard/Hotels/mocks/browser')
}

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);

