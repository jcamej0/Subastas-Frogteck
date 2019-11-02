import React, { useState } from "react";
import AuctionProductModal from "./AuctionProductModal";
import useGlobalState from "../../../globalState";
import {
  AuctionForm,
  AuctionLoading,
  AuctionSuccess,
  AuctionUnsuccess
} from "./components";
import "./Style.css";

const AuctionProduct = React.memo(({ productId }) => {
  const [globalState, globalActions] = useGlobalState();
  const [userAuctionOffer, changeUserAuctionOffer] = useState("");
  const [auctionStatus, changeActionStatus] = useState(null);
  const [huescaTemperature, updateHuescaTemperature] = useState(null);
  const [errorFormMessage, changeErrorFormMessage] = useState(null);
  const {
    modals: {
      buyProduct: { showModal }
    },
    products: { selectedProduct }
  } = globalState;

  const handleCloseProductModal = () => {
    const {
      modals: { toggleModal }
    } = globalActions;
    toggleModal("buyProduct");
    changeActionStatus(null);
    updateHuescaTemperature(null);
    changeErrorFormMessage(null);
    changeUserAuctionOffer("");
    changeActionStatus(null);
  };

  const updateAuctionOffer = event => {
    const auctionOffer = event.target.value;
    if (/[0-9]+/.test(auctionOffer) === false) {
      return;
    }

    changeUserAuctionOffer(auctionOffer);
  };

  const handleAuctionApply = () => {
    if (!userAuctionOffer) {
      changeErrorFormMessage(
        "Debes agregar tu monto maximo para poder pujar por este articulo"
      );
      return;
    }
    getHuescaWheater()
      .then(data => updateHuescaTemperature(data.main.temp))
      .catch(err => {
        changeActionStatus(false);
      });

    setTimeout(() => {
      const userMaxPrice = userAuctionOffer;
      const productMinPrice = selectedProduct.minPrice;

      if (userMaxPrice >= productMinPrice) {
        changeActionStatus(true);
      } else {
        changeActionStatus(false);
      }
    }, 1000);
  };

  async function getHuescaWheater() {
    changeActionStatus("loading");
    let response = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?id=3120514&units=metric&APPID=eef79aa0704f40f4235e1903bfb11cab"
    );
    let data = await response.json();
    return data;
  }

  const auctionStatusView = () => {
    switch (auctionStatus) {
      case null:
        return (
          <AuctionForm
            selectedProduct={selectedProduct}
            userAuctionOffer={userAuctionOffer}
            updateAuctionOffer={updateAuctionOffer}
            errorFormMessage={errorFormMessage}
            handleCloseProductModal={handleCloseProductModal}
            handleAuctionApply={handleAuctionApply}
          />
        );
      case true:
        return (
          <AuctionSuccess
            userAuctionOffer={userAuctionOffer}
            minPrice={selectedProduct.minPrice}
            huescaTemperature={huescaTemperature}
            handleCloseProductModal={handleCloseProductModal}
          />
        );
      case false:
        return (
          <AuctionUnsuccess handleCloseProductModal={handleCloseProductModal} />
        );
      case "loading":
        return <AuctionLoading />;
      default:
        return (
          <AuctionForm
            selectedProduct={selectedProduct}
            userAuctionOffer={userAuctionOffer}
            updateAuctionOffer={updateAuctionOffer}
            errorFormMessage={errorFormMessage}
            handleCloseProductModal={handleCloseProductModal}
            handleAuctionApply={handleAuctionApply}
          />
        );
    }
  };

  return (
    <AuctionProductModal
      showModal={showModal}
      handleCloseProductModal={handleCloseProductModal}
      handleAuctionApply={handleAuctionApply}
    >
      {auctionStatusView()}
    </AuctionProductModal>
  );
});

export default AuctionProduct;
