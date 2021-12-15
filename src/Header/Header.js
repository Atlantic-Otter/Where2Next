import React from "react";
import LoginMenu from "./Login/LoginMenu.js";
import "../App.css";
import UserContext from "../UserContext.js";
import UserIcon from "./User/UserIcon.js";
import ShareButtons from './SocialMedia/ShareButtons.js';

// todo: investigate react.useCallback

const Header = ({ loginModal, toggleLoginModal}) => {
  const { user, setUser } = React.useContext(UserContext);

  const logoutUser = (event) => {
    setUser(null);
  };

  return (
    <div id="header">
      {/* social media share buttons */}
      <ShareButtons />
      <UserIcon />
      {user ? (
        <a className="login-logout-button" onClick={logoutUser}>
          <span>Sign out</span>
        </a>
      ) : (
        <a className="login-logout-button" onClick={toggleLoginModal}>
          <span>Sign in</span>
        </a>
      )}
      {loginModal ? <LoginMenu toggleLoginModal={toggleLoginModal} /> : <></>}
    </div>
  );
};

export default Header;
