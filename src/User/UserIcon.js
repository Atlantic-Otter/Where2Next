import React from 'react';
import UserContext from '../UserContext.js';

const UserIcon = () => {
  const { user, setUser } = React.useContext(UserContext);
  const goToProfilePage = () => {
    // if user is NOT on user page,
      // if user is logged in
        // navigate to their profile page in react router
  };

  return (
    <div id="user-icon" onClick={goToProfilePage} >
      <img src={require('../icons/user-svgrepo-com.svg')} alt="user-svg"/>
    </div>
  );
};

export default UserIcon;