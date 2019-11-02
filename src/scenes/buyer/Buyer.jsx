import React from "react";
import ProductsList from "../../components/productsList";
import useGlobalState from "../../globalState";
import { AuctionProductModal } from "../../components/modals";

const Buyer = () => {
  const [, globalActions] = useGlobalState();
  const {
    products: { selectProduct }
  } = globalActions;

  const handleSelectProduct = id => {
    selectProduct(id);
  };

  return (
    <React.Fragment>
      <ProductsList onClickProduct={handleSelectProduct} />
      <AuctionProductModal />
    </React.Fragment>
  );
};

export default Buyer;
