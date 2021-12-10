import React from 'react';
import UserContext from '../UserContext.js';

const ProfileModal = () => {
const { toggleProfileModal } = React.useContext(UserContext);

  return(
    <div className="modal-background" onClick={toggleProfileModal}>
      <div className="login-menu" onClick={(event) => { event.stopPropagation(); }}>
        <span className="modal-close-button" onClick={toggleProfileModal}>&times;</span>
      Some text that will be profile info soon
    </div>
    </div>
  )
}

export default ProfileModal;
