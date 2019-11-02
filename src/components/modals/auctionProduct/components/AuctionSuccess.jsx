import React from "react";
import { Modal, Button } from "react-bootstrap";

const AuctionSuccess = ({
  userAuctionOffer,
  minPrice,
  huescaTemperature,
  handleCloseProductModal
}) => {
  return (
    <React.Fragment>
      <Modal.Body className="modal-body">
        <h1>Enhorabuena!</h1>
        <p>La oferta de compra era de {userAuctionOffer}€</p>
        <p>El minimo aeptado era de {minPrice}€</p>
        <p>La temperatura actual de huesca es de {huescaTemperature} </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleCloseProductModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </React.Fragment>
  );
};

export default AuctionSuccess;
