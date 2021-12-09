import React from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import Button from "react-bootstrap/Button";
function YourTripToast({ tripToastVisible, toggleTripToast }) {
  return (
    <ToastContainer position="bottom-end">
      <Toast bg="light" show={tripToastVisible} onClose={toggleTripToast}>
        <Toast.Header>My Trip</Toast.Header>
        <Toast.Body>
          Nulla exercitation do aute quis culpa id. Et labore minim irure sunt
          adipisicing laboris. Minim proident consequat nulla magna magna ipsum
          sint incididunt laborum mollit velit qui esse nostrud. Dolor fugiat
          veniam nostrud pariatur cupidatat eu cupidatat ex ipsum nisi
          consectetur et adipisicing. Nulla exercitation do aute quis culpa id.
          Et labore minim irure sunt adipisicing laboris. Minim proident
          consequat nulla magna magna ipsum sint incididunt laborum mollit velit
          qui esse nostrud. Dolor fugiat veniam nostrud pariatur cupidatat eu
          cupidatat ex ipsum nisi consectetur et adipisicing. Nulla exercitation
          do aute quis culpa id. Et labore minim irure sunt adipisicing laboris.
          Minim proident consequat nulla magna magna ipsum sint incididunt
          laborum mollit velit qui esse nostrud. Dolor fugiat veniam nostrud
          pariatur cupidatat eu cupidatat ex ipsum nisi consectetur et
          adipisicing. Nulla exercitation do aute quis culpa id. Et labore minim
          irure sunt adipisicing laboris. Minim proident consequat nulla magna
          magna ipsum sint incididunt laborum mollit velit qui esse nostrud.
          Dolor fugiat veniam nostrud pariatur cupidatat eu cupidatat ex ipsum
          nisi consectetur et adipisicing.
        </Toast.Body>
        {/* <Button>Check Out!</Button> */}
      </Toast>
    </ToastContainer>
  );
}

export default YourTripToast;
