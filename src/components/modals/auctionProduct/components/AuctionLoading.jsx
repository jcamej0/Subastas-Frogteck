import React from "react";
import { Modal } from "react-bootstrap";
import loading from "../../../../images/spinner.gif";
import "../Style.css";

const AuctionLoading = () => {
  return (
    <React.Fragment>
      <Modal.Body className="modal-body">
        <img src={loading} width="50px" alt="Cargando..."></img>
      </Modal.Body>
    </React.Fragment>
  );
};

export default AuctionLoading;
