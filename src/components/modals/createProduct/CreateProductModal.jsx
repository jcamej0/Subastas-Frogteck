import React, { useState } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import useGlobalState from "../../../globalState";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

const CreateProductModal = () => {
  const [globalState, globalActions] = useGlobalState();
  const {
    products: { updateName, updateMinPrice, addNewProduct },
    modals: { toggleModal }
  } = globalActions;
  const {
    modals: {
      newProduct: { showModal }
    }
  } = globalState;
  const {
    products: {
      newProduct: { name, minPrice }
    }
  } = globalState;
  const [errorFormMessage, changeErrorFormMesssage] = useState(null);

  const handleCloseProductModal = () => {
    toggleModal("newProduct");
    changeErrorFormMesssage(null);
  };

  const handleAddNewProduct = () => {
    if (minPrice && !name) {
      changeErrorFormMesssage("El articulo debe tener nombre");
    } else if (name && !minPrice) {
      changeErrorFormMesssage("El articulo debe tener precio");
    } else if (!name && !minPrice) {
      changeErrorFormMesssage("Debes completar la informacion del articulo");
    } else {
      addNewProduct();
      handleCloseProductModal();
    }
  };

  return (
    <Modal show={showModal} onHide={handleCloseProductModal}>
      <Modal.Header closeButton>
        <Modal.Title>Anadir producto a la subasta</Modal.Title>
      </Modal.Header>

      <Modal.Body className="form">
        <label htmlFor="name">Nombre de producto</label>
        <InputGroup>
          <FormControl
            id="name"
            value={name}
            maxLength="20"
            onChange={updateName}
          />
        </InputGroup>
        <label htmlFor="maxPrice">Precio maximo</label>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>€</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="maxPrice"
            value={minPrice}
            maxLength="16"
            onChange={updateMinPrice}
          />
        </InputGroup>
        <span className="error-message">{errorFormMessage}</span>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseProductModal}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={handleAddNewProduct}>
          Guardar producto
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateProductModal;
