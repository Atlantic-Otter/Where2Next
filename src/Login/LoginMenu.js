import React from 'react';
import helpers from './helpers.js';

// TODO: move all callbacks out of function body for efficient rerendering
  // check out useCallback OR
  // use setText as callback arg


// For development: Username "testing", password: "test" is in database
const LoginMenu = () => {

  var [text, setText] = React.useState({
    username: '',
    password: ''
  });

  const attemptLogin = (event) => {
    event.preventDefault()
    // make api request to query the db for matching username and password
    // on success set globabl state to be the user
    helpers.requestValidation(text)
    .then(({ data }) => {
      if (data) {
        alert('Login successful');
      } else {
        alert('Incorrect username/password');
      }
    })
    .catch((err) => {
      console.log('request error on querying username/password match');
      throw err;
    })
  };

  const updateText = (event) => {
    var stateKey = event.target.id;
    var newState = {...text};
    newState[stateKey] = event.target.value;
    setText(newState);
  };

  return (
    <div id="login-menu">
      <form onSubmit={attemptLogin} >
        <label>
          Username:
          <input id="username" type="text" onChange={updateText} required/>
        </label>
        <label>
          Password:
          <input id="password" type="password" onChange={updateText} required/>
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default LoginMenu;
