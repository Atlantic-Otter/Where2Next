import React from "react";
import UserContext from "../UserContext.js";

const UserIcon = () => {
  // state for whether modal is visible
  const { user, toggleProfileModal } = React.useContext(UserContext);

  return (
    <div id="user-icon" onClick={toggleProfileModal}>
      {user ? <p>{user.username}</p> : <p>Not signed in</p>}
      {/* fix this later: */}
      <img src={""} alt="user-svg" />
    </div>
  );
};

export default UserIcon;
