import React from 'react';
import helpers from './helpers.js';
import '../cssTemplates/modal.css';
import UserContext from '../UserContext.js';

// TODO: move all callbacks out of function body for efficient rerendering
  // check out useCallback OR
  // use setText as callback arg


// For development: Username "testing", password: "test" is in database
const LoginMenu = ({ toggleModal }) => {
  const { user, setUser } = React.useContext(UserContext);
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
      if (data === 'incorrect password') {
        alert('Incorrect username/password');
      } else {
        // add status logged in
        setUser(data);
        toggleModal();
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

    <div id="modal-background" onClick={toggleModal}>
      <div id="login-menu" onClick={(event) => { event.stopPropagation(); }}>
        <span id="modal-close-button" onClick={toggleModal}>&times;</span>
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
    </div>

  );
};

export default LoginMenu;




// on adding things to itineraty
  // get what was
  //

