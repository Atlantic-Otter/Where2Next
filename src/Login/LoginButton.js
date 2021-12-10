import React from 'react';
import LoginMenu from './LoginMenu.js';
import '../App.css';
import UserContext from '../UserContext.js';

// todo: investigate react.useCallback

const LoginButton = (props) => {
  const { user, setUser } = React.useContext(UserContext);

  var [modalView, setModalView] = React.useState(false);
  const toggleModal = (event) => {
    setModalView(!modalView);
  };

  const logoutUser = (event) => {
    setUser(null);
  }

  return (
    <div id="login">
      {user ? <span id="logout-button" onClick={logoutUser}>Logout</span>
        :
        <a id="login-button" onClick={toggleModal}>
          <span>Login</span>
        </a>


      }
      {modalView ? <LoginMenu toggleModal={toggleModal} /> : <></>}
    </div>
  )
};

export default LoginButton;
