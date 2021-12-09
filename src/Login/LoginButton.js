import React from 'react';
import LoginMenu from './LoginMenu.js';

// todo: investigate react.useCallback

const LoginButton = (props) => {
  var [modalView, setModalView] = React.useState(false);
  const toggleModal = (event) => {

    setModalView(!modalView);

  };

  return (
    <div>
      <button id="login-button" onClick={toggleModal}>
        Login
      </button>
      {modalView ? <LoginMenu toggleModal={toggleModal}/> : <></>}
    </div>
  )
};

export default LoginButton;
