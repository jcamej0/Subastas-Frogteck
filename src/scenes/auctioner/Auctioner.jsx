import React from "react";
import useGlobalState from "../../globalState";
import ProductsList from "../../components/productsList";
import { ReactComponent as Plus } from "../../images/plus.svg";
import { CreateProductModal } from "../../components/modals";

const Auctioner = () => {
  const [, globalActions] = useGlobalState();
  const {
    modals: { toggleModal }
  } = globalActions;

  const onToggleModal = () => {
    toggleModal("newProduct");
  };

  return (
    <React.Fragment>
      <ProductsList>
        <div onClick={onToggleModal} className="product card">
          <p>Anadir producto</p>
          <Plus className="icon" />
        </div>
      </ProductsList>
      >
      <CreateProductModal />
    </React.Fragment>
  );
};

export default Auctioner;
