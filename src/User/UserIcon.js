import React from "react";
import UserContext from "../UserContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const UserIcon = () => {
  // state for whether modal is visible
  const { user, toggleProfileModal } = React.useContext(UserContext);

  return (
    <div id="user-icon" onClick={toggleProfileModal}>
      {user ? <p>{user.username}</p> : <p>Not signed in</p>}
      <FontAwesomeIcon icon={faUser} size="2x" />
    </div>
  );
};

export default UserIcon;
