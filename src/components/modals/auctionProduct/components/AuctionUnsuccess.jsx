import React from "react";
import { Modal, Button } from "react-bootstrap";

const AuctionUnsuccess = ({ handleCloseProductModal }) => {
  return (
    <React.Fragment>
      <Modal.Body className="modal-body">
        <h1>No hubo trato!</h1>
        <p>Aumenta tu puja maxima y vuelve a intentarlo.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleCloseProductModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </React.Fragment>
  );
};

export default AuctionUnsuccess;
