import React from 'react';
import UserContext from '../UserContext.js';
import UpcomingTrips from './UpcomingTrips.js';
import PreviousTrips from './PreviousTrips.js';
import PersonalInfo from './PersonalInfo.js';

const ProfileModal = () => {
const { toggleProfileModal } = React.useContext(UserContext);

  return(
    <div className="modal-background" onClick={toggleProfileModal}>
      <div className="modal-window" onClick={(event) => { event.stopPropagation(); }}>

        {/* username */}
        <PersonalInfo />
        <h3>My trips:</h3>
        <div id="my-trips">
          <UpcomingTrips />
          <PreviousTrips />
        </div>

        <div className="modal-close-box">
          <span className="modal-close-button" onClick={toggleProfileModal}>&times;</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal;
