import React from 'react';


const ProfileModal = () => {

  return(
    <div className="modal-background" >
      <div className="login-menu" onClick={(event) => { event.stopPropagation(); }}>
        <span className="modal-close-button" >&times;</span>
      Some text that will be profile info soon
    </div>
    </div>
  )
}

export default ProfileModal;
