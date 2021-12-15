import React from 'react';

const PersonalInfo = ({ user }) => {

  return (
    <div id="user-info">
      <h3>My Info:</h3>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Date Joined: {new Date(user.created_at).toLocaleDateString()}</p>

    </div>
  )

};

export default PersonalInfo;