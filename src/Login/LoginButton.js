import React from 'react';

const toggleModal = (event) => {
  setModalView(!modalView);
};

const LoginButton = (props) => {
  var [modalView, setModalView] = React.useState(false);
  return (
    <div>
      <button id="login-button" onClick={toggleModal}>
        Login
      </button>

    </div>
  )
};

export default LoginButton;