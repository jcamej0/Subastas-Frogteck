import React from "react";
import { Modal } from "react-bootstrap";
import "./Style.css";

const AuctionProductModal = ({
  showModal,
  handleCloseProductModal,
  handleAuctionApply,
  children
}) => {
  return (
    <Modal show={showModal} onHide={handleCloseProductModal}>
      <Modal.Header closeButton>
        <Modal.Title>Subastar</Modal.Title>
      </Modal.Header>
      {children}
    </Modal>
  );
};

export default AuctionProductModal;
