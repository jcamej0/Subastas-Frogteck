import React from "react";
import useGlobalHook from "./state";
import products from "./products";
import modals from "./modals";

const state = {
  products: {
    ...products.state
  },
  modals: {
    ...modals.state
  }
};

const actions = {
  products: {
    ...products.actions
  },
  modals: {
    ...modals.actions
  }
};

const useGlobalState = useGlobalHook(React, state, actions);
export default useGlobalState;
