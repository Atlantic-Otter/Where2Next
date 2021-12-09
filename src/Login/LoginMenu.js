import React from 'react';
import User from '../../database/schema.js';


const LoginMenu = () => {
  // should render a menu (eventally a modal view) for user to login

  var [text, setText] = React.useState({
    username: '',
    password: ''
  });


  const attemptLogin = (event) => {
    // make api request to query the db for matching username and password
    // on success set globabl state to be the user
  }

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
          <input id="username" type="text" onChange={updateText} />
        </label>
        <label>
          Password
          <input id="password" type="password" onChange={updateText} />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  )
};

export default LoginMenu;
