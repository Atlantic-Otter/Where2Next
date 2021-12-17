import React from "react";
import UserContext from "../../UserContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import InitialsAvatar from 'react-initials-avatar';
// import 'react-initials-avatar/lib/ReactInitialsAvatar.css';


const UserIcon = () => {
  // state for whether modal is visible
  const { user, toggleProfileModal } = React.useContext(UserContext);

  // if a user is signed in,
    // the avatar should appear
  // otherwise
    // just the icon
  const colorScheme = [
    '#ff0000',
    '#ff7300',
    '#fffb00',
    '#48ff00',
    '#00ffd5',
    '#002bff',
    '#7a00ff',
    '#ff00c8',
    '#ff0000'
  ];

  var backgroundStyle = {
    'backgroundColor': colorScheme[Math.floor(Math.random() * (colorScheme.length ))]
  };

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
