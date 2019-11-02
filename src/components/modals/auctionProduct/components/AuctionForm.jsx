import React from "react";
import { InputGroup, FormControl, Modal, Button } from "react-bootstrap";

const AuctionForm = ({
  selectedProduct,
  userAuctionOffer,
  updateAuctionOffer,
  errorFormMessage,
  handleCloseProductModal,
  handleAuctionApply
}) => {
  return (
    <React.Fragment>
      <Modal.Body className="modal-body" id="auction-modal">
        <h1>{selectedProduct.name}</h1>
        <label htmlFor="price">Ingresa el precio maxima de tu subasta</label>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>€</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl value={userAuctionOffer} onChange={updateAuctionOffer} />
        </InputGroup>
        <span className="error-message">{errorFormMessage}</span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseProductModal}>
          Cerrar
        </Button>
        <Button
          variant="primary"
          id="auction-button"
          onClick={handleAuctionApply}
        >
          SUBASTAR!
        </Button>
      </Modal.Footer>
    </React.Fragment>
  );
};

export default AuctionForm;
