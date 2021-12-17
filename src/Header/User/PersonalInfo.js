import React from 'react';

const PersonalInfo = ({ user }) => {

  return (
    <>
    <h4>My Info:</h4>
    <div id="user-info">

        <div className="user-info-row">
          Username: <span className="user-info-value">{user.username}</span>
        </div>

        <div className="user-info-row">
          Email: <span className="user-info-value">{user.email}</span>
        </div>

        <div className="user-info-row">
          Date Joined: <span className="user-info-value">{new Date(user.created_at).toLocaleDateString()}</span>
        </div>


    </div>
    </>
  )

};

export default PersonalInfo;