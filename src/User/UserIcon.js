import React from "react";
import UserContext from "../UserContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const UserIcon = () => {
  // state for whether modal is visible
  const { user, toggleProfileModal } = React.useContext(UserContext);

  return (
    <div id="user-icon" onClick={toggleProfileModal}>
      <FontAwesomeIcon icon={faUser} size="2x" />
      {user ? <p data-testid="current-user">{user.username}</p> : <p>Not signed in</p>}
    </div>
  );
};

export default UserIcon;
