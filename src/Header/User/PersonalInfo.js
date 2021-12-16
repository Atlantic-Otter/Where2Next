import React from 'react';

const PersonalInfo = ({ user }) => {

  return (
    <div id="user-info">
      <h4>My Info:</h4>
      <p>
        Username: {user.username} <br />
        Email: {user.email} <br />
        Date Joined: {new Date(user.created_at).toLocaleDateString()}
      </p>

    </div>
  )

};

export default PersonalInfo;