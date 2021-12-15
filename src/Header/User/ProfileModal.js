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

        {/* username */}
        <PersonalInfo user={user}/>
        <div id="my-trips">
          <h3>My trips:</h3>
          <UpcomingTrips trips={user.upcomingTrips}/>
          {/* <PreviousTrips /> */}
        </div>

        {/* <div className="modal-close-box"> */}
          <span className="modal-close-button" onClick={toggleProfileModal}>&times;</span>
        {/* </div> */}
      </div>
    </div>
  );
}

export default ProfileModal;
