import React from "react";
import UserContext from "../../UserContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import InitialsAvatar from 'react-initials-avatar';

const UserIcon = () => {
  const { user, toggleProfileModal } = React.useContext(UserContext);
  return (
    <div id="user-icon" onClick={toggleProfileModal} >
      {user ?  <InitialsAvatar name={user.username} className="user-initials-icon"/>
      :
      <FontAwesomeIcon icon={faUser} size="2x" />
      }
    </div>
  );
};

export default UserIcon;
