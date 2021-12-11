import React from 'react';
import UserContext from '../UserContext.js';

const PersonalInfo = () => {
  const { user } = React.useContext(UserContext);
  return (
    <div id="user-info">
      <h3>My Info:</h3>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Date Joined: {user.created_at}</p>

    </div>
  )

};

export default PersonalInfo;