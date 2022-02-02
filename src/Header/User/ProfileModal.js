import React from 'react';
import UserContext from '../../UserContext.js';
import UpcomingTrips from './UpcomingTrips.js';
import PreviousTrips from './PreviousTrips.js';
import PersonalInfo from './PersonalInfo.js';
import '../../cssTemplates/modal.css';

const ProfileModal = () => {
const { user, toggleProfileModal } = React.useContext(UserContext);

  return(
    <div className="modal-background" onClick={toggleProfileModal}>
      <div className="profile-modal-window" onClick={(event) => { event.stopPropagation(); }}>
        <div id="profile-header">
          <h2 >Welcome, {user.username}</h2>
          <span id="profile-close-button" onClick={toggleProfileModal}>&times;</span>
        </div>
        <hr />
        <PersonalInfo user={user}/>
        <hr />
        <div id="my-trips">
          <UpcomingTrips trips={user.upcomingTrips}/>
          {/* <PreviousTrips /> */}
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
