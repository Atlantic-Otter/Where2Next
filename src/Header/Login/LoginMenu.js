import React from 'react';
import helpers from './helpers.js';
import '../../cssTemplates/modal.css';
import UserContext from '../../UserContext.js';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
      console.log(err);
      // throw err;
    })
  };

  const updateText = (event) => {
    var stateKey = event.target.id;
    var newState = {...text};
    newState[stateKey] = event.target.value;
    setText(newState);
  };

  return (

    <div className="modal-background" onClick={toggleModal}>
      <div className="login-modal-window" onClick={(event) => { event.stopPropagation(); }}>
        <Form id="login-form" onSubmit={attemptLogin} >

          <Form.Group className="mb-3" controlId="usernameLogin" >
            <Form.Label>Username:</Form.Label>
            <Form.Control required id="username" type="text" onChange={updateText} />
            <Form.Control.Feedback type="invalid">
              Required field.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="passwordLogin">
            <Form.Label>Credit Password:</Form.Label>
            <Form.Control required id="password" type="password" onChange={updateText} />
            <Form.Control.Feedback type="invalid">
              Required field.
            </Form.Control.Feedback>
          </Form.Group>

          <Button id="submit-button" type="submit" data-testid="login-button">
            Login
          </Button>
        </Form>
        {/* <div className="modal-close-box"> */}
          <span className="modal-close-button" onClick={toggleModal}>&times;</span>
        {/* </div> */}
      </div>
    </div>



  );
};

export default LoginMenu;




// on adding things to itineraty
  // get what was
  //

