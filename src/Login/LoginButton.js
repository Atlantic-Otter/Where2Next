import React from 'react';
import LoginMenu from './LoginMenu.js';
import '../App.css';

// todo: investigate react.useCallback

const LoginButton = (props) => {
  var [modalView, setModalView] = React.useState(false);
  const toggleModal = (event) => {
    setModalView(!modalView);
  };

  return (
    <div id="login">
      <a id="login-button" onClick={toggleModal}>
        <span>Login</span>
      </a>
      {modalView ? <LoginMenu /> : <></>}
    </div>
  )
};

export default LoginButton;
